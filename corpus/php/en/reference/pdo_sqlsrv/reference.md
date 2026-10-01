---
id: "en-php-guide-ref-pdo-sqlsrv"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-sqlsrv"
title: "Microsoft SQL Server PDO Driver (PDO_SQLSRV)"
module: "pdo_sqlsrv"
source_url: "https://www.php.net/manual/en/ref.pdo-sqlsrv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Microsoft SQL Server PDO Driver (PDO_SQLSRV)

MS SQL Server PDO Driver

  Introduction  PDO_SQLSRV is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to MS SQL Server (starting with SQL Server 2005) and SQL Azure databases.      

  PDO_SQLSRV DSN Connecting to MS SQL Server and SQL Azure databases   Description  The PDO_SQLSRV Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix** — The DSN prefix is sqlsrv:.
- **`APP`** — The application name used in tracing.
- **`ConnectionPooling`** — Specifies whether the connection is assigned from a connection pool (1 or `true`) or not (0 or `false`).
- **`Database`** — The name of the database.
- **`Encrypt`** — Specifies whether the communication with SQL Server is encrypted (1 or `true`) or unencrypted (0 or `false`).
- **`Failover_Partner`** — Specifies the server and instance of the database's mirror (if enabled and configured) to use when the primary server is unavailable.
- **`LoginTimeout`** — Specifies the number of seconds to wait before failing the connection attempt.
- **`MultipleActiveResultSets`** — Disables or explicitly enables support for multiple active Result sets (MARS).
- **`QuotedId`** — Specifies whether to use SQL-92 rules for quoted identifiers (1 or `true`) or to use legacy Transact-SQL rules (0 or `false`).
- **`Server`** — The name of the database server.
- **`TraceFile`** — Specifies the path for the file used for trace data.
- **`TraceOn`** — Specifies whether ODBC tracing is enabled (1 or `true`) or disabled (0 or `false`) for the connection being established.
- **`TransactionIsolation`** — Specifies the transaction isolation level. The accepted values for this option are PDO::SQLSRV_TXN_READ_UNCOMMITTED, PDO::SQLSRV_TXN_READ_COMMITTED, PDO::SQLSRV_TXN_REPEATABLE_READ, PDO::SQLSRV_TXN_SNAPSHOT, and PDO::SQLSRV_TXN_SERIALIZABLE.
- **`TrustServerCertificate`** — Specifies whether the client should trust (1 or `true`) or reject (0 or `false`) a self-signed server certificate.
- **`WSID`** — Specifies the name of the computer for tracing.

     Examples 
**PDO_SQLSRV DSN examples**

The following example shows how to connect to a specified MS SQL Server database:

```text

$c = new PDO("sqlsrv:Server=localhost;Database=testdb", "UserName", "Password");

      
```

The following example shows how to connect to a MS SQL Server database on a specified port:

```text

$c = new PDO("sqlsrv:Server=localhost,1521;Database=testdb", "UserName", "Password");

      
```

The following example shows how to connect to a SQL Azure database with server ID 12345abcde. Note that when you connect to SQL Azure with PDO, your username will be UserName@12345abcde (UserName@ServerId).

```text

$c = new PDO("sqlsrv:Server=12345abcde.database.windows.net;Database=testdb", "UserName@12345abcde", "Password");

      
```
