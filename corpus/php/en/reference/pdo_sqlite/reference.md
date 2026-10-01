---
id: "en-php-guide-ref-pdo-sqlite"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-sqlite"
title: "SQLite PDO Driver (PDO_SQLITE)"
module: "pdo_sqlite"
source_url: "https://www.php.net/manual/en/ref.pdo-sqlite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SQLite PDO Driver (PDO_SQLITE)

SQLite PDO Driver

  Introduction  PDO_SQLITE is a driver that implements the PHP Data Objects (PDO) interface to enable access to SQLite 3 databases.   
> PDO_SQLITE allows using strings apart from streams together with `PDO::PARAM_LOB`.

   

  PDO_SQLITE DSN Connecting to SQLite databases   Description  The PDO_SQLITE Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix (SQLite 3)** — The DSN prefix is sqlite:. - To access a database on disk, the absolute path has to be appended to the DSN prefix. - To create a database in memory, `:memory:` has to be appended to the DSN prefix. - If the DSN consists of the DSN prefix only, a temporary database is used, which is deleted when the connection is closed.

     Examples  
**PDO_SQLITE DSN examples**

The following examples show PDO_SQLITE DSN for connecting to SQLite databases:

```text

sqlite:/opt/databases/mydb.sq3
sqlite::memory:
sqlite:

       
```
