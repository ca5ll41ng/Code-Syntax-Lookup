---
id: "en-php-guide-ref-pdo-pgsql"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-pgsql"
title: "PostgreSQL PDO Driver (PDO_PGSQL)"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/ref.pdo-pgsql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PostgreSQL PDO Driver (PDO_PGSQL)

PostgreSQL PDO Driver

  Introduction  PDO_PGSQL is a driver that implements the PHP Data Objects (PDO) interface to enable access from PHP to PostgreSQL databases.     Resource Types  This extension defines a stream resource returned by `Pdo\Pgsql::lobOpen()`.       General notes 
> `bytea` columns are returned as stream resources. See Large Objects (LOBs) for how to read these values and how to bind data with `PDO::PARAM_LOB`.

  

  PDO_PGSQL DSN Connecting to PostgreSQL databases   Description  The PDO_PGSQL Data Source Name (DSN) is composed of the following elements, delimited by spaces or semicolons: 
- **DSN prefix** — The DSN prefix is pgsql:.
- **`host`** — The hostname on which the database server resides.
- **`port`** — The port on which the database server is running.
- **`dbname`** — The name of the database.
- **`user`** — The name of the user for the connection. If you specify the user name in the DSN, PDO ignores the value of the user name argument in the PDO constructor.
- **`password`** — The password of the user for the connection. If you specify the password in the DSN, PDO ignores the value of the password argument in the PDO constructor.
- **`sslmode`** — The SSL mode. Accepted values are `disable`, `allow`, `prefer`, `require`, `verify-ca`, and `verify-full`; their meaning is described in the [PostgreSQL Documentation](). Many hosted PostgreSQL services require an encrypted connection, so `require` or stricter is needed to connect to them.

 
> As of PHP 8.4.0, credentials specified in the DSN (`user` and `password`) take priority over the corresponding arguments passed to the `PDO` constructor. In earlier versions, the PDO constructor arguments took precedence.

 
> All semicolons in the DSN string are replaced by spaces, because PostgreSQL expects this format. This implies that semicolons in any of the components (e.g. `password` or `dbname`) are not supported.

     Examples  
**PDO_PGSQL DSN examples**

The following example shows a PDO_PGSQL DSN for connecting to a PostgreSQL database:

```text

pgsql:host=localhost;port=5432;dbname=testdb;user=bruce;password=mypass

       
```

The following example shows a PDO_PGSQL DSN for connecting to a PostgreSQL database via unix socket `/tmp/.s.PGSQL.5432`:

```text

pgsql:host=/tmp;port=5432;dbname=testdb;user=bruce;password=mypass

       
```
