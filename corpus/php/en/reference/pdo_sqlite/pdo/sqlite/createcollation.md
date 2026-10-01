---
id: "en-php-function-pdo-sqlite-createcollation"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Sqlite::createCollation"
title: "Registers a user-defined function for use as a collating function in SQL statements"
signature: "public bool Pdo\\Sqlite::createCollation(string $name, callable $callback)"
module: "pdo_sqlite"
source_url: "https://www.php.net/manual/en/pdo-sqlite.createcollation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a user-defined function for use as a collating function in SQL statements

## Description

```php
public bool Pdo\Sqlite::createCollation(string $name, callable $callback)
```

This method is similar to `Pdo\Sqlite::createFunction()` except that it registers functions that are used to collate strings.

## Parameters

- **`$name`** — Name of the SQL collating function to be created or redefined.
- **`$callback`** — Callback function that defines the behaviour of a collation. It must accept two `string`s and return `-1`, `0`, or `1` if the first string sorts before, sorts identically, or sorts after the second string respectively. An internal function that behaves like this is `strcmp()`. — This function need to be defined as: `int``{collation}()` `string``$string1` `string``$string2`

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A TypeError is thrown if the `$callback` does not return an `int`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | A TypeError is now thrown if the `$callback` does not return an `int`; previously the returned value was cast to `int`. |

## Examples

**`Pdo\Sqlite::createCollation()` example**

```php


<?php
$db = new Pdo\Sqlite('sqlite::memory:');
$db->exec("CREATE TABLE test (col1 string)");
$db->exec("INSERT INTO test VALUES ('a1')");
$db->exec("INSERT INTO test VALUES ('a10')");
$db->exec("INSERT INTO test VALUES ('a2')");

$db->sqliteCreateCollation('NATURAL_CMP', 'strnatcmp');
foreach ($db->query("SELECT col1 FROM test ORDER BY col1") as $row) {
  echo $row['col1'] . "\n";
}
echo "\n";
foreach ($db->query("SELECT col1 FROM test ORDER BY col1 COLLATE NATURAL_CMP") as $row) {
  echo $row['col1'] . "\n";
}
?>

   
```

The above example will output:

```text


a1
a10
a2

a1
a2
a10

   
```

## See Also

 `Pdo\Sqlite::createFunction()` `Pdo\Sqlite::createAggregate()` `sqlite_create_function()` `sqlite_create_aggregate()`
