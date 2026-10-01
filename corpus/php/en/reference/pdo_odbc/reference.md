---
id: "en-php-guide-ref-pdo-odbc"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-odbc"
title: "ODBC and DB2 PDO Driver (PDO_ODBC)"
module: "pdo_odbc"
source_url: "https://www.php.net/manual/en/ref.pdo-odbc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ODBC and DB2 PDO Driver (PDO_ODBC)

ODBC and DB2 PDO Driver

  Introduction  PDO_ODBC is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to databases through ODBC drivers or through the IBM DB2 Call Level Interface (DB2 CLI) library. PDO_ODBC currently supports three different "flavours" of database drivers: 
- **ibm-db2** — Supports access to IBM DB2 Universal Database, Cloudscape, and Apache Derby servers through the free DB2 express-C client.
- **unixODBC** — Supports access to database servers through the unixODBC driver manager and the database's own ODBC drivers.
- **generic** — Offers a compile option for ODBC driver managers that are not explicitly supported by PDO_ODBC.

    On Windows, `php_pdo_odbc.dll` has to be enabled as extension in php.ini. It is linked against the Windows ODBC Driver Manager so that PHP can connect to any database cataloged as a System DSN.          

  PDO_ODBC DSN Connecting to ODBC or DB2 databases   Description  The PDO_ODBC Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix** — The DSN prefix is odbc:. If you are connecting to a database cataloged in the ODBC driver manager or the DB2 catalog, you can append the cataloged name of the database to the DSN.
- **DSN** — The name of the database as cataloged in the ODBC driver manager or the DB2 catalog. Alternately, you can provide a complete ODBC connection string to connect to a database as described at []().
- **`UID`** — The name of the user for the connection. If you specify the user name in the DSN, PDO ignores the value of the user name argument in the PDO constructor.
- **`PWD`** — The password of the user for the connection. If you specify the password in the DSN, PDO ignores the value of the password argument in the PDO constructor.

     Changelog 
|  |  |
| --- | --- |
| 8.4.0 | When passing an empty `string` to the password argument in the PDO constructor, `pwd` was not included in the connection string created until now, but the behavior has been changed to include it as an empty string. Passing `null` for the password argument in the PDO constructor results in the same behavior as before. |
| 8.4.0 | Changed the behavior to ignore the user name argument and the password argument in the PDO constructor separately when the DSN contains `uid` or `pwd`. Previously, if included only either `uid` or `pwd` in the DSN, both the user name argument and the password argument in the PDO constructor were ignored. |

   Examples  
**PDO_ODBC DSN example (ODBC driver manager)**

The following example shows a PDO_ODBC DSN for connecting to an ODBC database cataloged as testdb in the ODBC driver manager:

```text

odbc:testdb

      
```

 
**PDO_ODBC DSN example (IBM DB2 uncataloged connection)**

The following example shows a PDO_ODBC DSN for connecting to an IBM DB2 database named SAMPLE using the full ODBC DSN syntax:

```text

odbc:DRIVER={IBM DB2 ODBC DRIVER};HOSTNAME=localhost;PORT=50000;DATABASE=SAMPLE;PROTOCOL=TCPIP;UID=db2inst1;PWD=ibmdb2;

      
```

 
**PDO_ODBC DSN example (Microsoft Access uncataloged connection)**

The following example shows a PDO_ODBC DSN for connecting to a Microsoft Access database stored at C:\db.mdb using the full ODBC DSN syntax:

```text

odbc:Driver={Microsoft Access Driver (*.mdb)};Dbq=C:\\db.mdb;Uid=Admin

      
```
