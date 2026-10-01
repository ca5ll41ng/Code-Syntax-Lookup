---
id: "en-php-guide-ref-pdo-dblib"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-dblib"
title: "Microsoft SQL Server and Sybase PDO Driver (PDO_DBLIB)"
module: "pdo_dblib"
source_url: "https://www.php.net/manual/en/ref.pdo-dblib.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Microsoft SQL Server and Sybase PDO Driver (PDO_DBLIB)

MS SQL Server PDO Driver

  Introduction  PDO_DBLIB is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to Microsoft SQL Server and Sybase databases through the FreeTDS library.    This extension is not available anymore on Windows.    On Windows, you should use SqlSrv, an alternative driver for MS SQL is available from Microsoft: []().    If it is not possible to use SqlSrv, you can use the PDO_ODBC driver to connect to Microsoft SQL Server and Sybase databases, as the native Windows DB-LIB is ancient, thread un-safe and no longer supported by Microsoft.    

  PDO_DBLIB DSN Connecting to Microsoft SQL Server and Sybase databases   Description  The PDO_DBLIB Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix** — The DSN prefix is sybase: if PDO_DBLIB was linked against the Sybase ct-lib libraries, mssql: if PDO_DBLIB was linked against the Microsoft SQL Server libraries, or dblib: if PDO_DBLIB was linked against the FreeTDS libraries.
- **`host`** — The hostname on which the database server resides. Defaults to 127.0.0.1.
- **`dbname`** — The name of the database.
- **`charset`** — The client character set.
- **`appname`** — The application name (used in sysprocesses). Defaults to "PHP Generic DB-lib" or "PHP freetds".
- **`secure`** — Currently unused.

     Examples  
**PDO_DBLIB DSN examples**

The following examples show a PDO_DBLIB DSN for connecting to Microsoft SQL Server and Sybase databases:

```text

mssql:host=localhost;dbname=testdb
sybase:host=localhost;dbname=testdb
dblib:host=localhost;dbname=testdb

       
```
