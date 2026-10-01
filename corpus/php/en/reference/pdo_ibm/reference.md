---
id: "en-php-guide-ref-pdo-ibm"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-ibm"
title: "IBM PDO Driver (PDO_IBM)"
module: "pdo_ibm"
source_url: "https://www.php.net/manual/en/ref.pdo-ibm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# IBM PDO Driver (PDO_IBM)

IBM PDO Driver

  Introduction  PDO_IBM is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to IBM databases.        

  PDO_IBM DSN Connecting to IBM databases   Description  The PDO_IBM Data Source Name (DSN) is based on the IBM CLI DSN. The major components of the PDO_IBM DSN are: 
- **DSN prefix** — The DSN prefix is ibm:.
- **DSN** — The DSN can be any of the following: - a) Data source setup using `db2cli.ini` or `odbc.ini` - b) Catalogued database name i.e. database alias in the DB2 client catalog - c) Complete connection string in the following format: DRIVER={IBM DB2 ODBC DRIVER};DATABASE=`$database`;HOSTNAME=`$hostname`;PORT=`$port`;PROTOCOL=TCPIP;UID=`$username`;PWD=`$password`; where the parameters represent the following values: - **`$database`** — The name of the database. - **`$hostname`** — The hostname or IP address of the database server. - **`$port`** — The TCP/IP port on which the database is listening for requests. - **`$username`** — The username with which you are connecting to the database. - **`$password`** — The password with which you are connecting to the database.

     Examples  
**PDO_IBM DSN example using `db2cli.ini`**

The following example shows a PDO_IBM DSN for connecting to an DB2 database cataloged as DB2_9 in `db2cli.ini`:

```text

$db = new PDO("ibm:DSN=DB2_9", "", "");

[DB2_9]
Database=testdb
Protocol=tcpip
Hostname=11.22.33.444
Servicename=56789
```

 
**PDO_IBM DSN example using a connection string**

The following example shows a PDO_IBM DSN for connecting to an DB2 database named testdb using the DB2 CLI connection string syntax.

```text

$db = new PDO("ibm:DRIVER={IBM DB2 ODBC DRIVER};DATABASE=testdb;" .
  "HOSTNAME=11.22.33.444;PORT=56789;PROTOCOL=TCPIP;", "testuser", "tespass");

       
```
