---
id: "en-php-guide-oci8-configuration"
language: "php"
lang: "en"
category: "guide"
name: "oci8.configuration"
title: "Runtime Configuration"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| oci8.connection_class | "" | `INI_ALL` |  |
| oci8.default_prefetch | "100" | `INI_SYSTEM` |  |
| oci8.events | Off | `INI_SYSTEM` |  |
| oci8.max_persistent | "-1" | `INI_SYSTEM` |  |
| oci8.old_oci_close_semantics | Off | `INI_SYSTEM` | Deprecated as of PHP 8.1.0. |
| oci8.persistent_timeout | "-1" | `INI_SYSTEM` |  |
| oci8.ping_interval | "60" | `INI_SYSTEM` |  |
| oci8.prefetch_lob_size | "0" | `INI_SYSTEM` | Available since PECL OCI8 3.2. |
| oci8.privileged_connect | Off | `INI_SYSTEM` |  |
| oci8.statement_cache_size | "20" | `INI_SYSTEM` |  |

Here's a short explanation of the configuration directives.

- **`$oci8.connection_class` `string`** — This user defined text should always be set when using Oracle Database Resident Connection Pooling (DRCP). It allows sub-partitioning of the DRCP connection pool, allowing OCI8 persistent connections from an application to reuse database sessions from a previous PHP script, giving better scalability. When an application uses a database pooled process previously used with a different connection class, the session settings such as the default Oracle date format are reset. This prevents accidental sharing of information between different applications. — The value can be set at runtime with `ini_set()` prior to connecting. — To use DRCP, OCI8 must be linked with Oracle 11*g* (or later) libraries and the database must be Oracle 11*g* (or later). The DRCP connection pool must be enabled in the database, the `oci8.connection_class` should be set to the same string for all web servers running the same application, and the OCI8 connection string must specify to use a pooled server. The application should use persistent connections.
- **`$oci8.default_prefetch` `int`** — This option sets the default number of extra rows that will be fetched and cached automatically whenever a low-level request for data from the database is made. Setting a value of `0` turns off prefetching. — The prefetch value does not alter the number of rows that functions like `oci_fetch_array()` return to the user; the prefetching and caching of rows is handled internally in OCI8. — The value can be set per-statement with `oci_set_prefetch()` prior to statement execution. — When using Oracle Database 12*c* (or later), the prefetch value set by PHP can be overridden by Oracle's client `oraaccess.xml` configuration file. Refer to Oracle documentation for more detail.
  > A larger prefetch can result in improved performance, at the cost of some increased memory usage. For queries that return large amounts of data, the performance benefit can be significant.


- **`$oci8.events` `bool`** — Using `On` allows PHP to be notified of database Fast Application Notification (FAN) events. — Without FAN, when a database instance or machine node fails unexpectedly, PHP applications may be blocked waiting for a database response until a TCP timeout expires. With FAN events, PHP applications are quickly notified of failures that affect their established database connections. The OCI8 extension will clean up unusable connections in the persistent connection cache. — When using `On`, the database must also be configured to post FAN events. — FAN support is available when OCI8 is linked with Oracle 10*g*R2 (or later) libraries and connected to Oracle Database 10*g*R2 (or later).
- **`$oci8.max_persistent` `int`** — The maximum number of persistent OCI8 connections per PHP process. Setting this option to -1 means that there is no limit.
- **`$oci8.old_oci_close_semantics` `bool`** — This option controls `oci_close()` behaviour. Enabling it means that `oci_close()` will do nothing; the connection will not be closed until the end of the script. This is for backward compatibility only. If you find that you need to enable this setting, you are *strongly encouraged* to adjust the `oci_close()` calls in your application instead of enabling this option.
- **`$oci8.persistent_timeout` `int`** — The maximum number of seconds that a PHP process is allowed to keep an idle persistent connection open. Setting this option to -1 means that idle persistent connections will be retained until the PHP process terminates or the connection is explicitly closed with `oci_close()`.
  > In PHP, the expiry of idle resources is not alarm-based. It occurs when PHP finishes processing a script and checks the last-used timestamp of resources. Hence there is a paradox that idle connections can only be closed when there is some activity (though not necessarily OCI8 related) in the PHP process. If there is more than one PHP process then each must individually be activated in order to trigger expiry of its idle resources. The introduction of Database Resident Connection Pooling (DRCP) in Oracle 11*g* resolves the memory and resource issues that `oci8.max_persistent` and `oci8.persistent_timeout` previously attempted to overcome.


- **`$oci8.ping_interval` `int`** — The number of seconds that must pass before issuing a ping during `oci_pconnect()`. A ping ensures that the database connection is valid. When set to 0, persistent connections will be pinged every time `oci_pconnect()` is called. To disable pings completely, set this option to -1.
  > Disabling pings allows `oci_pconnect()` to operate at the highest efficiency, but PHP may not be able to detect unusable connections, such as caused by network dropout, or if the Oracle database has gone down since PHP connected, until the connection is used later in the script. Consult the `oci_pconnect()` documentation for more information.


- **`$oci8.prefetch_lob_size` `int`** — This is a tuning parameter affecting internal buffering of LOB data. Increasing this value can improve the performance of fetching smaller LOBs by reducing round-trips between PHP and the database. Memory usage will change. — The value affects LOBs returned as OCILob instances and also those returned using `OCI_RETURN_LOBS`. — The value can be set per-statement with `oci_set_prefetch_lob()` prior to statement execution.
  > Use with Oracle Database 12.2 or later.


- **`$oci8.privileged_connect` `bool`** — This option allows connections to use the privileged external credentials `OCI_SYSOPER` or `OCI_SYSDBA`.
  > Setting this `On` can allow scripts on web servers running with the appropriate OS user privileges to connect as privileged database users without requiring a database password. This can be a security risk.


- **`$oci8.statement_cache_size` `int`** — This option enables statement caching, and specifies how many statements to cache. To disable statement caching just set this option to 0. — Statement caching removes the need to transmit the statement text to the database and removes the need to transmit any meta data about the statement back to PHP. This can significantly improve overall system performance in applications which reuse statements during the lifetime of a connection. Some extra database "cursors" may be held open under the assumption that statements will be reused. — Set this value to the size of the working set of statements used by your application. Setting too small a value can cause statements to be flushed from the cache before they are reused. — This option is of most use with persistent connections. — When using Oracle Database 12*c* (or later), this value can be overridden and automatically tuned by Oracle's client `oraaccess.xml` file. Refer to Oracle documentation for more detail.
