---
id: "en-php-guide-class-pdo-firebird"
language: "php"
lang: "en"
category: "guide"
name: "class.pdo-firebird"
title: "The Pdo\\Firebird class"
module: "pdo_firebird"
source_url: "https://www.php.net/manual/en/class.pdo-firebird.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pdo\Firebird class

Pdo\Firebird

   Introduction  A `PDO` subclass representing a connection using the Firebird PDO driver.      Class Synopsis   Pdo   `Firebird`   `extends` `PDO`      `public` `const` `int` `Pdo\Firebird::ATTR_DATE_FORMAT`   `public` `const` `int` `Pdo\Firebird::ATTR_TIME_FORMAT`   `public` `const` `int` `Pdo\Firebird::ATTR_TIMESTAMP_FORMAT`   `public` `const` `int` `Pdo\Firebird::TRANSACTION_ISOLATION_LEVEL`   `public` `const` `int` `Pdo\Firebird::READ_COMMITTED`   `public` `const` `int` `Pdo\Firebird::REPEATABLE_READ`   `public` `const` `int` `Pdo\Firebird::SERIALIZABLE`   `public` `const` `int` `Pdo\Firebird::WRITABLE_TRANSACTION`            Predefined Constants 
- **`Pdo\Firebird::ATTR_DATE_FORMAT`** — Sets the date format.
- **`Pdo\Firebird::ATTR_TIME_FORMAT`** — Sets the time format.
- **`Pdo\Firebird::ATTR_TIMESTAMP_FORMAT`** — Sets the timestamp format.
- **`Pdo\Firebird::TRANSACTION_ISOLATION_LEVEL`** — Attribute to sets the transaction isolation level. This can be one of `Pdo\Firebird::READ_COMMITTED`, `Pdo\Firebird::REPEATABLE_READ`, or `Pdo\Firebird::SERIALIZABLE`.
- **`Pdo\Firebird::READ_COMMITTED`** — Flag denoting the ANSI transaction isolation level is read committed. This is the default behavior.
- **`Pdo\Firebird::REPEATABLE_READ`** — Flag denoting the ANSI transaction isolation level is repeatable read. This corresponds to Firebird's "snapshot" isolation level.
- **`Pdo\Firebird::SERIALIZABLE`** — Flag denoting the ANSI transaction isolation level is serializable. This corresponds to Firebird's "snapshot table stability" isolation level.
- **`Pdo\Firebird::WRITABLE_TRANSACTION`** — Boolean attribute used to toggle the transaction access mode between `READ ONLY` and `READ WRITE`. By default, it is `true` indicating `READ WRITE`.
