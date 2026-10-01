---
id: "en-php-guide-class-pdo-sqlite"
language: "php"
lang: "en"
category: "guide"
name: "class.pdo-sqlite"
title: "The Pdo\\Sqlite class"
module: "pdo_sqlite"
source_url: "https://www.php.net/manual/en/class.pdo-sqlite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pdo\Sqlite class

Pdo\Sqlite

   Introduction  A `PDO` subclass representing a connection using the SQLite PDO driver.    This driver supports a dedicated SQL query parser for the SQLite dialect. It can handle the following: 
- Single, double-quoted, and backtick literals, with doubling as escaping mechanism.
- Square brackets quoting for identifiers.
- Two-dashes and C-style comments (non-nested).

      Class Synopsis    `Pdo\Sqlite`   `extends` `PDO`      `public` `const` `int` `Pdo\Sqlite::DETERMINISTIC`   `public` `const` `int` `Pdo\Sqlite::OPEN_READONLY`   `public` `const` `int` `Pdo\Sqlite::OPEN_READWRITE`   `public` `const` `int` `Pdo\Sqlite::OPEN_CREATE`   `public` `const` `int` `Pdo\Sqlite::ATTR_OPEN_FLAGS`   `public` `const` `int` `Pdo\Sqlite::ATTR_READONLY_STATEMENT`   `public` `const` `int` `Pdo\Sqlite::ATTR_EXTENDED_RESULT_CODES`   `public` `const` `int` `Pdo\Sqlite::ATTR_BUSY_STATEMENT`   `public` `const` `int` `Pdo\Sqlite::ATTR_EXPLAIN_STATEMENT`   `public` `const` `int` `Pdo\Sqlite::EXPLAIN_MODE_PREPARED`   `public` `const` `int` `Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN`   `public` `const` `int` `Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN_QUERY_PLAN`   `public` `const` `int` `Pdo\Sqlite::ATTR_TRANSACTION_MODE`   `public` `const` `int` `Pdo\Sqlite::TRANSACTION_MODE_DEFERRED`   `public` `const` `int` `Pdo\Sqlite::TRANSACTION_MODE_IMMEDIATE`   `public` `const` `int` `Pdo\Sqlite::TRANSACTION_MODE_EXCLUSIVE`   `public` `const` `int` `Pdo\Sqlite::OK`   `public` `const` `int` `Pdo\Sqlite::DENY`   `public` `const` `int` `Pdo\Sqlite::IGNORE`           Predefined Constants 
- **`Pdo\Sqlite::DETERMINISTIC`**
- **`Pdo\Sqlite::OPEN_READONLY`**
- **`Pdo\Sqlite::OPEN_READWRITE`**
- **`Pdo\Sqlite::OPEN_CREATE`**
- **`Pdo\Sqlite::ATTR_OPEN_FLAGS`**
- **`Pdo\Sqlite::ATTR_READONLY_STATEMENT`**
- **`Pdo\Sqlite::ATTR_EXTENDED_RESULT_CODES`**
- **`Pdo\Sqlite::ATTR_BUSY_STATEMENT`** — A read-only statement attribute, retrieved with `PDOStatement::getAttribute()`, which is `true` if the statement has been executed and still has a pending row, and `false` otherwise. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::ATTR_EXPLAIN_STATEMENT`** — A statement attribute controlling the explain mode, set with `PDOStatement::setAttribute()`. Possible values are `Pdo\Sqlite::EXPLAIN_MODE_PREPARED`, `Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN`, and `Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN_QUERY_PLAN`. A ValueError is thrown if PHP has been compiled against a libsqlite older than 3.43.0. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::EXPLAIN_MODE_PREPARED`** — Value for `Pdo\Sqlite::ATTR_EXPLAIN_STATEMENT`: returns the statement as prepared (no explanation). Available as of PHP 8.5.0, when compiled against libsqlite >= 3.43.0.
- **`Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN`** — Value for `Pdo\Sqlite::ATTR_EXPLAIN_STATEMENT`: returns the opcodes of the virtual machine used to execute the statement (equivalent to SQLite's `EXPLAIN`). Available as of PHP 8.5.0, when compiled against libsqlite >= 3.43.0.
- **`Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN_QUERY_PLAN`** — Value for `Pdo\Sqlite::ATTR_EXPLAIN_STATEMENT`: returns the query plan (equivalent to SQLite's `EXPLAIN QUERY PLAN`). Available as of PHP 8.5.0, when compiled against libsqlite >= 3.43.0.
- **`Pdo\Sqlite::ATTR_TRANSACTION_MODE`** — A connection attribute configuring the transaction mode used by `PDO::beginTransaction()`. Possible values are `Pdo\Sqlite::TRANSACTION_MODE_DEFERRED`, `Pdo\Sqlite::TRANSACTION_MODE_IMMEDIATE`, and `Pdo\Sqlite::TRANSACTION_MODE_EXCLUSIVE`. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::TRANSACTION_MODE_DEFERRED`** — Value for `Pdo\Sqlite::ATTR_TRANSACTION_MODE`: uses SQLite's DEFERRED transaction mode (the default). Available as of PHP 8.5.0.
- **`Pdo\Sqlite::TRANSACTION_MODE_IMMEDIATE`** — Value for `Pdo\Sqlite::ATTR_TRANSACTION_MODE`: uses SQLite's IMMEDIATE transaction mode. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::TRANSACTION_MODE_EXCLUSIVE`** — Value for `Pdo\Sqlite::ATTR_TRANSACTION_MODE`: uses SQLite's EXCLUSIVE transaction mode. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::OK`** — Return value of an authorizer callback set with `Pdo\Sqlite::setAuthorizer()`, allowing the action. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::DENY`** — Return value of an authorizer callback set with `Pdo\Sqlite::setAuthorizer()`, denying the action. Available as of PHP 8.5.0.
- **`Pdo\Sqlite::IGNORE`** — Return value of an authorizer callback set with `Pdo\Sqlite::setAuthorizer()`, substituting a `null` value for the column that would have been read. Available as of PHP 8.5.0.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Added constants `Pdo\Sqlite::ATTR_BUSY_STATEMENT`, `Pdo\Sqlite::ATTR_EXPLAIN_STATEMENT`, `Pdo\Sqlite::EXPLAIN_MODE_PREPARED`, `Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN`, `Pdo\Sqlite::EXPLAIN_MODE_EXPLAIN_QUERY_PLAN`, `Pdo\Sqlite::ATTR_TRANSACTION_MODE`, `Pdo\Sqlite::TRANSACTION_MODE_DEFERRED`, `Pdo\Sqlite::TRANSACTION_MODE_IMMEDIATE`, and `Pdo\Sqlite::TRANSACTION_MODE_EXCLUSIVE`, `Pdo\Sqlite::OK`, `Pdo\Sqlite::DENY`, and `Pdo\Sqlite::IGNORE`. |
