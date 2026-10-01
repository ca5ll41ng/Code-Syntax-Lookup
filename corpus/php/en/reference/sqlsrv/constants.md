---
id: "en-php-guide-sqlsrv-constants"
language: "php"
lang: "en"
category: "guide"
name: "sqlsrv.constants"
title: "Predefined Constants"
module: "sqlsrv"
source_url: "https://www.php.net/manual/en/sqlsrv.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`SQLSRV_FETCH_ASSOC` (`int`)** — Forces `sqlsrv_fetch_array()` to return an associative array when passed as a parameter.
- **`SQLSRV_FETCH_NUMERIC` (`int`)** — Forces `sqlsrv_fetch_array()` to return an array with numeric when passed as a parameter.
- **`SQLSRV_FETCH_BOTH` (`int`)** — Forces `sqlsrv_fetch_array()` to return an array with both associative and numeric keys when passed as a parameter (the default behavior).
- **`SQLSRV_ERR_ALL` (`int`)** — Forces `sqlsrv_errors()` to return both errors and warnings when passed as a parameter (the default behavior).
- **`SQLSRV_ERR_ERRORS` (`int`)** — Forces `sqlsrv_errors()` to return errors only (no warnings) when passed as a parameter.
- **`SQLSRV_ERR_WARNINGS` (`int`)** — Forces `sqlsrv_errors()` to return warnings only (no errors) when passed as a parameter.
- **`SQLSRV_LOG_SYSTEM_ALL` (`int`)** — Turns on logging of all subsystems when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SYSTEM_CONN` (`int`)** — Turns on logging of connection activity when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SYSTEM_INIT` (`int`)** — Turns on logging of initialization activity when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SYSTEM_OFF` (`int`)** — Turns off logging of all subsystems when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SYSTEM_STMT` (`int`)** — Turns on logging of statement activity when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SYSTEM_UTIL` (`int`)** — Turns on logging of error function activity when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SEVERITY_ALL` (`int`)** — Specifies that errors, warnings, and notices will be logged when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SEVERITY_ERROR` (`int`)** — Specifies that errors will be logged when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SEVERITY_NOTICE` (`int`)** — Specifies that notices will be logged when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_LOG_SEVERITY_WARNING` (`int`)** — Specifies that warnings will be logged when passed to `sqlsrv_configure()` as a parameter.
- **`SQLSRV_NULLABLE_YES` (`int`)** — Indicates that a column is nullable.
- **`SQLSRV_NULLABLE_NO` (`int`)** — Indicates that a column is not nullable.
- **`SQLSRV_NULLABLE_UNKNOWN` (`int`)** — Indicates that it is not known if a column is nullable.
- **`SQLSRV_PARAM_IN` (`int`)** — Indicates an input parameter when passed to `sqlsrv_query()` or `sqlsrv_prepare()`.
- **`SQLSRV_PARAM_INOUT` (`int`)** — Indicates a bidirectional parameter when passed to `sqlsrv_query()` or `sqlsrv_prepare()`.
- **`SQLSRV_PARAM_OUT` (`int`)** — Indicates an output parameter when passed to `sqlsrv_query()` or `sqlsrv_prepare()`.
- **`SQLSRV_PHPTYPE_INT` (`int`)** — Specifies an integer PHP data type. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_PHPTYPE_DATETIME` (`int`)** — Specifies a datetime PHP data type. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_PHPTYPE_FLOAT` (`int`)** — Specifies a float PHP data type. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_PHPTYPE_STREAM` (`int`)** — Specifies a PHP stream. This constant works like a function and accepts an encoding constant. See the SQLSRV_ENC_* constants. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_PHPTYPE_STRING` (`int`)** — Specifies a string PHP data type. This constant works like a function and accepts an encoding constant. See the SQLSRV_ENC_* constants. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_ENC_BINARY` (`int`)** — Specifies that data is returned as a raw byte stream from the server without performing encoding or translation. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_ENC_CHAR` (`int`)** — Data is returned in 8-bit characters as specified in the code page of the Windows locale that is set on the system. Any multi-byte characters or characters that do not map into this code page are substituted with a single byte question mark (?) character. This is the default encoding. For usage information, see [How to: Specify PHP Types]().
- **`SQLSRV_SQLTYPE_BIGINT` (`int`)** — Describes the bigint SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_BINARY` (`int`)** — Describes the binary SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_BIT` (`int`)** — Describes the bit SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_CHAR` (`int`)** — Describes the char SQL Server data type. This constant works like a function and accepts a parameter indicating the number characters. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_DATE` (`int`)** — Describes the date SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_DATETIME` (`int`)** — Describes the datetime SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_DATETIME2` (`int`)** — Describes the datetime2 SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_DATETIMEOFFSET` (`int`)** — Describes the datetimeoffset SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_DECIMAL` (`int`)** — Describes the decimal SQL Server data type. This constant works like a function and accepts two parameters indicating (in order) precision and scale. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_FLOAT` (`int`)** — Describes the float SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_IMAGE` (`int`)** — Describes the image SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_INT` (`int`)** — Describes the int SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_MONEY` (`int`)** — Describes the money SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_NCHAR` (`int`)** — Describes the nchar SQL Server data type. This constant works like a function and accepts a single parameter indicating the character count. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_NUMERIC` (`int`)** — Describes the numeric SQL Server data type. This constant works like a function and accepts two parameter indicating (in order) precision and scale. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_NVARCHAR` (`int`)** — Describes the nvarchar SQL Server data type. This constant works like a function and accepts a single parameter indicating the character count. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_NVARCHAR`('max') (`int`)** — Describes the nvarchar(MAX) SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_NTEXT` (`int`)** — Describes the ntext SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_REAL` (`int`)** — Describes the real SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_SMALLDATETIME` (`int`)** — Describes the smalldatetime SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_SMALLINT` (`int`)** — Describes the smallint SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_SMALLMONEY` (`int`)** — Describes the smallmoney SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_TEXT` (`int`)** — Describes the text SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_TIME` (`int`)** — Describes the time SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_TIMESTAMP` (`int`)** — Describes the timestamp SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_TINYINT` (`int`)** — Describes the tinyint SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_UNIQUEIDENTIFIER` (`int`)** — Describes the uniqueidentifier SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_UDT` (`int`)** — Describes the UDT SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_VARBINARY` (`int`)** — Describes the varbinary SQL Server data type. This constant works like a function and accepts a single parameter indicating the byte count. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_VARBINARY`('max') (`int`)** — Describes the varbinary(MAX) SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_VARCHAR` (`int`)** — Describes the varchar SQL Server data type. This constant works like a function and accepts a single parameter indicating the character count. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_VARCHAR`('max') (`int`)** — Describes the varchar(MAX) SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_SQLTYPE_XML` (`int`)** — Describes the XML SQL Server data type. For usage information, see [How to: Specify SQL Types]().
- **`SQLSRV_TXN_READ_UNCOMMITTED` (`int`)** — Indicates a transaction isolation level of READ UNCOMMITTED. This value is used to set the TransactionIsolation level in the $connectionOptions array passed to `sqlsrv_connect()`.
- **`SQLSRV_TXN_READ_COMMITTED` (`int`)** — Indicates a transaction isolation level of READ COMMITTED. This value is used to set the TransactionIsolation level in the $connectionOptions array passed to `sqlsrv_connect()`.
- **`SQLSRV_TXN_REPEATABLE_READ` (`int`)** — Indicates a transaction isolation level of REPEATABLE READ. This value is used to set the TransactionIsolation level in the $connectionOptions array passed to `sqlsrv_connect()`.
- **`SQLSRV_TXN_SNAPSHOT` (`int`)** — Indicates a transaction isolation level of SNAPSHOT. This value is used to set the TransactionIsolation level in the $connectionOptions array passed to `sqlsrv_connect()`.
- **`SQLSRV_TXN_READ_SERIALIZABLE` (`int`)** — Indicates a transaction isolation level of SERIALIZABLE. This value is used to set the TransactionIsolation level in the $connectionOptions array passed to `sqlsrv_connect()`.
- **`SQLSRV_CURSOR_FORWARD` (`int`)** — Indicates a forward-only cursor. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_CURSOR_STATIC` (`int`)** — Indicates a static cursor. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_CURSOR_DYNAMIC` (`int`)** — Indicates a dynamic cursor. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_CURSOR_KEYSET` (`int`)** — Indicates a keyset cursor. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_CURSOR_BUFFERED` (`int`)** — Creates a client-side cursor query. Lets you access rows in any order. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_SCROLL_NEXT` (`int`)** — Specifies which row to select in a result set. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_SCROLL_PRIOR` (`int`)** — Specifies which row to select in a result set. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_SCROLL_FIRST` (`int`)** — Specifies which row to select in a result set. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_SCROLL_LAST` (`int`)** — Specifies which row to select in a result set. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_SCROLL_ABSOLUTE` (`int`)** — Specifies which row to select in a result set. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
- **`SQLSRV_SCROLL_RELATIVE` (`int`)** — Specifies which row to select in a result set. For usage information, see [Specifying a Cursor Type and Selecting Rows]().
