---
id: "en-php-guide-ref-pdo-informix"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-informix"
title: "Informix PDO Driver (PDO_INFORMIX)"
module: "pdo_informix"
source_url: "https://www.php.net/manual/en/ref.pdo-informix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Informix PDO Driver (PDO_INFORMIX)

Informix PDO Driver

  Introduction  PDO_INFORMIX is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to Informix databases.       Scrollable cursors  PDO_INFORMIX supports scrollable cursors; however, they are not enabled by default. To enable scrollable cursor support, you must either set ENABLESCROLLABLECURSORS=1 in the corresponding ODBC connection settings in `odbc.ini` or pass the EnableScrollableCursors=1 clause in the DSN connection string.    

  PDO_INFORMIX DSN Connecting to Informix databases   Description  The PDO_INFORMIX Data Source Name (DSN) is based on the Informix ODBC DSN string. Details on configuring an Informix ODBC DSN are available from the [Informix Dynamic Server Information Center](). The major components of the PDO_INFORMIX DSN are: 
- **DSN prefix** — The DSN prefix is informix:.
- **DSN** — The DSN can be either a data source setup using `odbc.ini` or a complete [connection string]().

     Examples  
**PDO_INFORMIX DSN example using `odbc.ini`**

The following example shows a PDO_INFORMIX DSN for connecting to an Informix database cataloged as Infdrv33 in `odbc.ini`:

```text

$db = new PDO("informix:DSN=Infdrv33", "", "");
```

```text

[ODBC Data Sources]
Infdrv33=INFORMIX 3.3 32-BIT

[Infdrv33]
Driver=/opt/informix/csdk_2.81.UC1G2/lib/cli/iclis09b.so
Description=INFORMIX 3.3 32-BIT
Database=common_db
LogonID=testuser
pwd=testpass
Servername=ids_server
DB_LOCALE=en_US.819
OPTIMIZEAUTOCOMMIT=1
ENABLESCROLLABLECURSORS=1
```

 
**PDO_INFORMIX DSN example using a connection string**

The following example shows a PDO_INFORMIX DSN for connecting to an Informix database named common_db using the Informix connection string syntax.

```text

$db = new PDO("informix:host=host.domain.com; service=9800;
    database=common_db; server=ids_server; protocol=onsoctcp;
    EnableScrollableCursors=1", "testuser", "tespass");

       
```
