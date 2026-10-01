---
id: "en-php-guide-class-pdorow"
language: "php"
lang: "en"
category: "guide"
name: "class.pdorow"
title: "The PDORow class"
module: "pdo"
source_url: "https://www.php.net/manual/en/class.pdorow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The PDORow class

PDORow

   Introduction  Represents a row from a result set returned by `PDOStatement::fetch()` called with `PDO::FETCH_LAZY` fetch mode.    Objects of this class cannot be instantiated and are not serializable.    The `PDORow` object allows access to the returned data as if both `PDO::FETCH_OBJ` and `PDO::FETCH_BOTH` mode were used. This means that the returned data can be accessed as object properties, and as an array both indexed by the column name and a column offset number.   
> Accessing an undefined property returns `null` without emitting a warning.

    Class Synopsis    `final` `PDORow`    `public` `string` `queryString`       Properties 
- **`queryString`** — Query string used by the `PDOStatement` that returned the `PDORow` object.

    Errors/Exceptions  Throws an `Error` when trying to write to or `unset()` any property.
