---
id: "en-php-function-function-mqseries-connx"
language: "php"
lang: "en"
category: "function"
name: "mqseries_connx"
title: "MQSeries MQCONNX"
signature: "void mqseries_connx(string $qManagerName, array $connOptions, resource $hconn, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-connx.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQCONNX

## Description

```php
void mqseries_connx(string $qManagerName, array $connOptions, resource $hconn, resource $compCode, resource $reason)
```

The `mqseries_connx()` (MQCONNX) call connects an application program to a queue manager. It provides a queue manager connection handle, which is used by the application on subsequent MQ calls.

The `mqseries_connx()` call is like the `mqseries_conn()` (MQCONN) call, except that MQCONNX allows options to be specified to control the way that the call works.

## Parameters

- **`$qManagerName`** — Name of queue manager. — Name of the queue manager the application wishes to connect.
- **`$connOps`** — Options that control the action of function — See also the MQCNO structure.
- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_connx()` example**

```php


<?php
    $mqcno = array(
        'Version' => MQSERIES_MQCNO_VERSION_2,
        'Options' => MQSERIES_MQCNO_STANDARD_BINDING,
        'MQCD' => array('ChannelName' => 'MQNX9420.CLIENT',
        'ConnectionName' => 'localhost',
        'TransportType' => MQSERIES_MQXPT_TCP)
    );

    mqseries_connx('MQNX9420', $mqcno, $conn, $comp_code,$reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("Connx CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
        exit;
    }

?>

    
```

**`mqseries_connx()` example using SSL connection & OCSP Responder URL**

```php


<?php
    $mqcno = array(
        'Version' => 4, //MQCNO_VERSION_4
        'Options' => MQSERIES_MQCNO_STANDARD_BINDING,
        'MQCD' => array(
            'Version' => 7, //MQCD_VERSION_7
            'ConnectionName' => 'localhost',
            'TransportType' => MQSERIES_MQXPT_TCP,
            'ChannelName' => 'CONNECTIONCHANNEL',
            'SSLCipherSpec' => 'NULL_SHA'
        ),
        'MQSCO' => array(
            'KeyRepository' => '/var/mqm/qmgrs/QUEUEMGR/ssl/key', //Local path where the SSL key repository can be found
            'MQAIR' => array(
                'Version' => 2, //MQAIR_VERSION_2
                'AuthInfoType' => 2, //MQAIT_OCSP
                'OCSPResponderURL' => 'http://dummy.OCSP.responder'
            )
        )
    );

    mqseries_connx('QUEUEMGR', $mqcno, $conn, $comp_code,$reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("Connx CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
        exit;
    }

?>

    
```

## See Also

 `mqseries_disc()`
