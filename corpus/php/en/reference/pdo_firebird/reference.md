---
id: "en-php-guide-ref-pdo-firebird"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-firebird"
title: "Firebird PDO Driver (PDO_FIREBIRD)"
module: "pdo_firebird"
source_url: "https://www.php.net/manual/en/ref.pdo-firebird.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Firebird PDO Driver (PDO_FIREBIRD)

Firebird PDO Driver

  Introduction  PDO_FIREBIRD is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to Firebird database.      

  PDO_FIREBIRD DSN Connecting to Firebird databases   Description  The PDO_FIREBIRD Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix** — The DSN prefix is firebird:.
- **`dbname`** — The name of the database.
- **`charset`** — The character set.
- **`role`** — The SQL role name.
- **`dialect`** — The dialect of the database; either `1` or `3`. If not specified, the dialect defaults to `3`. Available as of PHP 7.4.0.

     Examples  
**PDO_FIREBIRD DSN example with path**

The following example shows a PDO_FIREBIRD DSN for connecting to Firebird databases:

```text

firebird:dbname=/path/to/DATABASE.FDB

       
```

 
**PDO_FIREBIRD DSN example with port and path**

The following example shows a PDO_FIREBIRD DSN for connecting to a Firebird database using hostname port and path:

```text

firebird:dbname=hostname/port:/path/to/DATABASE.FDB

       
```

 
**PDO_FIREBIRD DSN example with localhost and path to employee.fdb on Debian system**

The following example shows a PDO_FIREBIRD DSN for connecting to a Firebird database employee.fdb using localhost:

```text

firebird:dbname=localhost:/var/lib/firebird/2.5/data/employee.fdb

       
```

 
**PDO_FIREBIRD DSN to connect to a dialect 1 database**

The following example shows a PDO_FIREBIRD DSN for connecting to a Firebird database test.fdb which has been created using dialect 1. This is only supported as of PHP 7.4.0.

```text

firebird:dbname=localhost:/var/lib/firebird/2.5/data/test.fdb;charset=utf-8;dialect=1

```
