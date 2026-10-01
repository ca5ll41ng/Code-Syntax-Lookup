---
id: "en-php-guide-pdo-sqlsrv-constants"
language: "php"
lang: "en"
category: "guide"
name: "pdo-sqlsrv.constants"
title: "Predefined Constants"
module: "pdo_sqlsrv"
source_url: "https://www.php.net/manual/en/pdo-sqlsrv.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

- **`PDO::SQLSRV_TXN_READ_UNCOMMITTED` (`int`)** — This constant is an acceptable value for the SQLSRV DSN key TransactionIsolation. This constant sets the transaction isolation level for the connection to Read Uncommitted.
- **`PDO::SQLSRV_TXN_READ_COMMITTED` (`int`)** — This constant is an acceptable value for the SQLSRV DSN key TransactionIsolation. This constant sets the transaction isolation level for the connection to Read Committed.
- **`PDO::SQLSRV_TXN_REPEATABLE_READ` (`int`)** — This constant is an acceptable value for the SQLSRV DSN key TransactionIsolation. This constant sets the transaction isolation level for the connection to Repeateable Read.
- **`PDO::SQLSRV_TXN_SNAPSHOT` (`int`)** — This constant is an acceptable value for the SQLSRV DSN key TransactionIsolation. This constant sets the transaction isolation level for the connection to Snapshot.
- **`PDO::SQLSRV_TXN_SERIALIZABLE` (`int`)** — This constant is an acceptable value for the SQLSRV DSN key TransactionIsolation. This constant sets the transaction isolation level for the connection to Serializable.
- **`PDO::SQLSRV_ENCODING_BINARY` (`int`)** — Specifies that data is sent/retrieved as a raw byte stream to/from the server without performing encoding or translation. This constant can be passed to PDOStatement::setAttribute, PDO::prepare, PDOStatement::bindColumn, and PDOStatement::bindParam.
- **`PDO::SQLSRV_ENCODING_SYSTEM` (`int`)** — Specifies that data is sent/retrieved to/from the server as 8-bit characters as specified in the code page of the Windows locale that is set on the system. Any multi-byte characters or characters that do not map into this code page are substituted with a single byte question mark (?) character. This constant can be passed to PDOStatement::setAttribute, PDO::setAttribute, PDO::prepare, PDOStatement::bindColumn, and PDOStatement::bindParam.
- **`PDO::SQLSRV_ENCODING_UTF8` (`int`)** — Specifies that data is sent/retrieved to/from the server in UTF-8 encoding. This is the default encoding. This constant can be passed to PDOStatement::setAttribute, PDO::setAttribute, PDO::prepare, PDOStatement::bindColumn, and PDOStatement::bindParam.
- **`PDO::SQLSRV_ENCODING_DEFAULT` (`int`)** — Specifies that data is sent/retrieved to/from the server according to PDO::SQLSRV_ENCODING_SYSTEM if specified during connection. The connection's encoding is used if specified in a prepare statement. This constant can be passed to PDOStatement::setAttribute, PDO::setAttribute, PDO::prepare, PDOStatement::bindColumn, and PDOStatement::bindParam.
- **`PDO::SQLSRV_ATTR_QUERY_TIMEOUT` (`int`)** — A non-negative integer representing the timeout period, in seconds. Zero (0) is the default and means no timeout. This constant can be passed to PDOStatement::setAttribute, PDO::setAttribute, and PDO::prepare.
- **`PDO::SQLSRV_ATTR_DIRECT_QUERY` (`int`)** — Indicates that a query should be executed directly, without being prepared. This constant can be passed to PDO::setAttribute, and PDO::prepare. For more information, see [Direct and Prepared Statement Execution]().
