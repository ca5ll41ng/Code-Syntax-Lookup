---
id: "en-php-guide-class-pdo-pgsql"
language: "php"
lang: "en"
category: "guide"
name: "class.pdo-pgsql"
title: "The Pdo\\Pgsql class"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/class.pdo-pgsql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pdo\Pgsql class

Pdo\Pgsql

   Introduction  A `PDO` subclass representing a connection using the PostgreSQL PDO driver.    This driver supports a dedicated SQL query parser for the PostgreSQL dialect. It can handle the following: 
- Single and double-quoted literals, with doubling as escaping mechanism
- C-style “escape” string literals
- Dollar-quoted string literals
- Two-dashes and C-style comments (non-nested).
- Support for `??` as escape sequence for the `?` operator.

   
> Because this parser recognizes dollar-quoted string literals, question marks inside them are not treated as parameter placeholders and do not need to be escaped. As of PHP 8.4.0, escaping question marks as `??` inside a dollar-quoted string is deprecated.

    Class Synopsis   Pdo   `Pgsql`   `extends` `PDO`      `public` `const` `int` `Pdo\Pgsql::ATTR_DISABLE_PREPARES`   `public` `const` `int` `Pdo\Pgsql::ATTR_RESULT_MEMORY_SIZE`   `public` `const` `int` `Pdo\Pgsql::TRANSACTION_IDLE`   `public` `const` `int` `Pdo\Pgsql::TRANSACTION_ACTIVE`   `public` `const` `int` `Pdo\Pgsql::TRANSACTION_INTRANS`   `public` `const` `int` `Pdo\Pgsql::TRANSACTION_INERROR`   `public` `const` `int` `Pdo\Pgsql::TRANSACTION_UNKNOWN`            Predefined Constants 
- **`Pdo\Pgsql::ATTR_DISABLE_PREPARES`** — Send the query and the parameters to the server together in a single call, avoiding the need to create a named prepared statement separately. If the query is only going to be executed once this can reduce latency by avoiding an unnecessary server round-trip.
- **`Pdo\Pgsql::ATTR_RESULT_MEMORY_SIZE`** — Returns the amount of memory, in bytes, allocated to the specified query result `PDOStatement` instance, or `null` if no results exist before the query is executed.
- **`PDO::ATTR_PREFETCH`** — As of PHP 8.5.0, setting this attribute to `0` enables lazy (single-row) fetching: rows are retrieved from the server one at a time as they are fetched, instead of buffering the whole result set in memory before the first `PDOStatement::fetch()` call. This reduces memory usage for large result sets. Any other value keeps the default buffered behavior. — It can be set per connection with `PDO::setAttribute()`, or per statement via the `PDO::prepare()` or `PDO::query()` driver options.
  > In lazy mode, a connection can have only one active statement at a time. Running another statement silently discards any unread rows of the previous one; no error is raised.

- **`Pdo\Pgsql::TRANSACTION_IDLE`**
  > This constant has no effect, and is deprecated as of PHP 8.5.0.

- **`Pdo\Pgsql::TRANSACTION_ACTIVE`**
  > This constant has no effect, and is deprecated as of PHP 8.5.0.

- **`Pdo\Pgsql::TRANSACTION_INTRANS`**
  > This constant has no effect, and is deprecated as of PHP 8.5.0.

- **`Pdo\Pgsql::TRANSACTION_INERROR`**
  > This constant has no effect, and is deprecated as of PHP 8.5.0.

- **`Pdo\Pgsql::TRANSACTION_UNKNOWN`**
  > This constant has no effect, and is deprecated as of PHP 8.5.0.
