---
id: "en-php-guide-oci8-taf"
language: "php"
lang: "en"
category: "guide"
name: "oci8.taf"
title: "OCI8 Transparent Application Failover (TAF) Support"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.taf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# OCI8 Transparent Application Failover (TAF) Support

TAF is an Oracle Database feature that provides high availability. It enables PHP OCI8 applications to automatically reconnect to a preconfigured database when database connectivity fails due to instance or network failure.

In a configured Oracle Database system, TAF occurs when the PHP application detects that the database instance is down or unreachable. It establishes a connection to another node in an Oracle [RAC]() configuration, a hot standby database, or the same database instance itself. See [Oracle Call Interface Programmer's Guide]() for more information about OCI TAF.

An application callback can be registered with `oci_register_taf_callback()`. During failover, normal application processing stops and the registered callback is invoked. The callback notifies the application of the failover events. If the failover succeeds, normal processing will be resumed. If the failover aborts, any following database operations in the application will fail due to no connection being available.

When a connection fails over to another database, the callback can reset any necessary connection state, for example replaying any necessary ALTER SESSION commands if the database service did not have -failover_restore enabled.

An application callback can be removed by calling `oci_unregister_taf_callback()`.

## Configuring Transparent Application Failover

TAF can be configured on the PHP OCI8 side or in the database configuration. If both are configured, database-side settings take precedence.

Configure TAF in PHP OCI8 (the client side) by including the FAILOVER_MODE parameter in the CONNECT_DATA portion of a connect descriptor. See Configuring Transparent Application Failover in [Oracle Database Net Services Administrator's Guide]() for more information about client side configuration of TAF.

An example tnsnames.ora to configure TAF reconnecting to the same database instance:

```text ORCL = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 127.0.0.1)(PORT = 1521)) (CONNECT_DATA = (SERVICE_NAME = orclpdb1) (FAILOVER_MODE = (TYPE = SELECT) (METHOD = BASIC) (RETRIES = 20) (DELAY = 15)))) ```

Alternatively configure TAF on the database side by modifying the target service with [srvctl]() (for RAC) or the [DBMS_SERVICE.MODIFY_SERVICE]() packaged procedure (for single instance databases).

## Using TAF Callbacks in OCI8

A TAF callback is an application function that can be registered to be called during failover. It is called several times while re-establishing the application's connection.

Callback first occurs when a loss of connection is detected. This allows the application to act accordingly for the upcoming delay of the failover. If the failover is successful, the callback is invoked after connection is re-established and usable. At this time, the application can resynchronize session settings and take actions such as informing the user that failover occurred. If failover is unsuccessful, a callback occurs to inform the application that a failover did not take place and the connection is unusable.

The interface of a TAF user-defined callback function is as follows:

```php
int userCallbackFn(resource $connection, int $event, int $type)
```

- **`$connection`** — The Oracle connection on which the TAF callback was registered via `oci_register_taf_callback()`. The connection is not valid until the failover completes successfully.
- **`$event`** — The failover event indicates the current status of the failover. — - `OCI_FO_BEGIN` indicates that failover has detected a lost connection and failover is starting. - `OCI_FO_END` indicates successful completion of failover. - `OCI_FO_ABORT` indicates that failover was unsuccessful, and there is no option of retrying. - `OCI_FO_ERROR` also indicates that failover was unsuccessful, but it gives the application the opportunity to handle the error and return OCI_FO_RETRY to retry failover. - `OCI_FO_REAUTH` indicates that an Oracle user has been re-authenticated.
- **`$type`** — The failover type. This lets the callback know what type of failover the application has requested. The usual values are as follows: — - `OCI_FO_SESSION` indicates that the user has requested only session failover. For example, if a user's connection is lost, then a new session is automatically created for the user on the backup. This type of failover does not attempt to recover SELECTs. - `OCI_FO_SELECT` indicates that the user has requested SELECT failover as well. It allows users with open cursors to continue fetching from them after failure.
- **`$return value`** — - `0` indicates the failover steps should continue normally. - `OCI_FO_RETRY` indicates that the failover should be attempted again by Oracle. In case of an error while failing over to a new connection, TAF is able to retry the failover. Typically, the application code should sleep for a while before returning OCI_FO_RETRY.

**Registering a TAF callback**

```php


<?php

// Define userspace callback
class MyClass {
    public static $retry_count;
    public static function TAFCallback($conn, $event, $type)
    {
        switch ($event) {
            case OCI_FO_BEGIN:
                printf(" Failing Over ... Please stand by\n");
                printf(" Failover type was found to be %s \n",
                       (($type==OCI_FO_SESSION) ? "SESSION"
                        :(($type==OCI_FO_SELECT) ? "SELECT" : "UNKNOWN!")));
                self::$retry_count = 0;
                break;
            case OCI_FO_ABORT:
                // The application cannot continue using the database
                printf(" Failover aborted. Failover will not take place.\n");
                break;
            case OCI_FO_END:
                // Failover completes successfully. Inform users a failover occurs.
                printf(" Failover ended ... resuming services\n");
                break;
            case OCI_FO_REAUTH:
                printf(" Failed over user ... resuming services\n");
                // Replay any ALTER SESSION commands associated with this connection
                // eg. oci_parse($conn, ‘ALTER SESSION …’) ;
                break;
            case OCI_FO_ERROR:
                // Stop retrying if we have already attempted for 20 times.
                if (self::$retry_count >= 20)
                    return 0;
                printf(" Failover error received. Sleeping...\n");
                sleep(10);
                self::$retry_count++;
                return OCI_FO_RETRY; // retry failover
                break;
            default:
                printf("Bad Failover Event: %d.\n", $event);
                break;
        }
        return 0;
    }
}

$fn_name = 'MyClass::TAFCallback';

$conn = oci_connect('hr', 'welcome', 'orcl');
$sysconn = oci_connect('system', 'oracle', 'orcl');

// Use a privileged connection to construct a SQL statement that will initiate failover
$sql = <<< 'END'
select unique 'alter system disconnect session '''||sid||','||serial#||''''
from v$session_connect_info
where sid = sys_context('USERENV', 'SID')
END;

$s = oci_parse($conn, $sql);
oci_execute($s);
$r = oci_fetch_array($s);
$disconnectssql = $r[0];

oci_register_taf_callback($conn, $fn_name); // Register TAFCallback to Oracle TAF

print "Parsing user query\n";
$sql = "select systimestamp from dual";
$stmt = oci_parse($conn, $sql);

// For example, if a connection loss occurs at this point, oci_execute() will
// detect the loss and failover begins. During failover, oci_execute() will
// invoke the TAF callback function several times. If the failover is successful,
// a new connection is transparently created and oci_execute() will continue as
// usual. The connection session settings can be reset in the TAF callback
// function. If the failover is aborted, oci_execute() will return an error
// because a valid connection is not available.

// Disconnect the user, which initiates failover
print "Disconnecting the user\n";
$discsql = oci_parse($sysconn, $disconnectssql);
oci_execute($discsql);

print "Executing user query\n";
$e = oci_execute($stmt);
if (!$e) {
    $m = oci_error($stmt);
    trigger_error("Could not execute statement: ". $m['message'], E_USER_ERROR);
}
$row = oci_fetch_array($stmt);
print $row[0] . "\n";

// do other SQL statements with the new connection, if it is valid
// $stmt = oci_parse($conn,  . . .);

?>

   
```

## See Also

 `oci_register_taf_callback()` `oci_unregister_taf_callback()`
