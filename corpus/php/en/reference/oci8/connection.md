---
id: "en-php-guide-oci8-connection"
language: "php"
lang: "en"
category: "guide"
name: "oci8.connection"
title: "OCI8 Connection Handling and Connection Pooling"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.connection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# OCI8 Connection Handling and Connection Pooling

## Connection Functions

The OCI8 extension provides three different functions for connecting to Oracle. The standard connection function is `oci_connect()`. This creates a connection to an Oracle database and returns a resource used by subsequent database calls.

Connecting to an Oracle server is a reasonably expensive operation in terms of the time that it takes to complete. The `oci_pconnect()` function uses a persistent cache of connections that can be re-used across different script requests. This means that the connection overhead will typically only occur once per PHP process (or Apache child).

If the application connects to Oracle using a different set of database credentials for each web user, the persistent cache employed by `oci_pconnect()` will become less useful as the number of concurrent users increases, to the point where it may start to adversely affect the overall performance of the Oracle server due to maintaining too many idle connections. If the application is structured in this way, it is recommended to either tune the application using the oci8.max_persistent and oci8.persistent_timeout configuration settings (these will give control over the persistent connection cache size and lifetime), use Oracle Database Resident Connection Pooling (in Oracle Database 11g or later), or use `oci_connect()` instead.

Both `oci_connect()` and `oci_pconnect()` employ a connection cache; if multiple calls to `oci_connect()` use the same parameters in a given script, the second and subsequent calls return the existing connection handle. The cache used by `oci_connect()` is cleaned up at the end of the script run, or when the connection handle is explicitly closed. The function `oci_pconnect()` has similar behavior, although its cache is maintained separately and survives between HTTP requests.

This caching feature means the two handles are not transactionally isolated (they are in fact the same connection handle, so there is no isolation of any kind). If the application needs two separate, transactionally isolated connections, then use `oci_new_connect()`.

The `oci_pconnect()` cache is cleared and any database connections closed when the PHP process terminates, so effective use of persistent connections requires that PHP be an Apache module or used with FPM, or similar. Persistent connections will not have any benefits over `oci_connect()` when PHP is used with CGI or via the command-line.

The function `oci_new_connect()` always creates a new connection to the Oracle server, regardless of what other connections might already exist. High traffic web applications should avoid using `oci_new_connect()`, especially in the busiest sections of the application.

Persistent connections can be closed by the user, allowing greater control over connection resource usage. Persistent connections will now also be closed automatically when there is no PHP variable referencing them, such as at the end of scope of a PHP user function. This will rollback any uncommitted transaction. These changes to persistent connections make them behave similarly to non-persistent connections, simplifying the interface, allowing for greater application consistency and predictability. Use oci8.old_oci_close_semantics set to *On* to retain the historical behavior.

The automatic re-establishment of PHP persistent connections after an Apache or FPM process respawns means Oracle Database `LOGON` triggers are only recommended for setting session attributes and not for per-application user connection requests.

## DRCP Connection Pooling

PHP supports Oracle Database Resident Connection Pooling (DRCP). DRCP allows more efficient use of database machine memory and provides high scalability. No, or minimal, application changes are needed to use DRCP.

DRCP is suited for applications that connect using few database schemas and hold database connections open for a short period of time. Other applications should use Oracle's default `Dedicated` database server processes, or use `Shared` servers.

DRCP benefits all three connection functions, but gives the highest scalability when connections are created with `oci_pconnect()`.

For DRCP to be available in OCI8, Oracle client libraries used by PHP and the version of the Oracle Database must both be 11g or greater.

Documentation on DRCP is found in several Oracle manuals. For example, see [Configuring Database Resident Connection Pooling]() in the Oracle documentation for usage information. A [DRCP white paper]() contains background information on DRCP.

To use DRCP, install the OCI8 extension and Oracle 11g (or later) libraries and then follow these steps:

- As a privileged database administrator, use a program like SQL*Plus to start the connection pool in the database: ```text SQL> execute dbms_connection_pool.start_pool; ```
- Optionally use `dbms_connection_pool.alter_param()` to configure DRCP settings. The current pool settings can be queried from the `DBA_CPOOL_INFO` view.
- Update the connection strings used. For PHP applications that currently connect using a Network Connect Name like `MYDB`: ```text $c = oci_pconnect("myuser", "mypassword", "MYDB"); ``` modify the tnsnames.ora file and add a `(SERVER=POOLED)` clause, for example: ```text MYDB = (DESCRIPTION=(ADDRESS=(PROTOCOL=tcp) (HOST=myhost.dom.com) (PORT=1521))(CONNECT_DATA=(SERVICE_NAME=sales) (SERVER=POOLED))) ``` Alternatively, modify the Easy Connect syntax in PHP and add `:POOLED` after the service name: ```text $c = oci_pconnect("myuser", "mypassword", "myhost.dom.com:1521/sales:POOLED"); ```
- Edit php.ini and choose a connection class name. This name indicates a logical division of the connection pool and can be used to isolate pooling for separate applications. Any PHP applications with the same user name and connection class value will be able to share connections in the pool, giving greater scalability. ```text oci8.connection_class = "MY_APPLICATION_NAME" ```
- Run the application, connecting to the 11g (or later) database.

> Applications using Oracle Client libraries 10g that require the performance of persistent connections can reduce the amount of database server memory needed by using Oracle `Shared` servers (previously known as Multi Threaded Servers). Refer to Oracle documentation for information.

> Changing a password over DRCP connections will fail with the error *ORA-56609: Usage not supported with DRCP*. This is a documented restriction of Oracle Database 11g.
