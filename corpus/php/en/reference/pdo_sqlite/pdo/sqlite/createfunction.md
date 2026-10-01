---
id: "en-php-function-pdo-sqlite-createfunction"
language: "php"
lang: "en"
category: "function"
name: "Pdo\\Sqlite::createFunction"
title: "Registers a user-defined function for use in SQL statements"
signature: "public bool Pdo\\Sqlite::createFunction(string $function_name, callable $callback, int $num_args = -1, int $flags = 0)"
module: "pdo_sqlite"
source_url: "https://www.php.net/manual/en/pdo-sqlite.createfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a user-defined function for use in SQL statements

## Description

```php
public bool Pdo\Sqlite::createFunction(string $function_name, callable $callback, int $num_args = -1, int $flags = 0)
```

This method allows PHP function to be registered with SQLite as a user-defined function, so that it can be called within SQL queries. The defined function can be used in any SQL query that allows function calls, for example `SELECT`, `UPDATE`, or triggers.

> By using this method it is possible to override native SQL functions.

## Parameters

- **`$function_name`** — The name of the function used in SQL statements.
- **`$callback`** — Callback function to handle the defined SQL function.
  > Callback functions should return a type understood by SQLite (i.e. scalar type).

 — This function need to be defined as: `mixed``{callback}()` `mixed``$value` `mixed``$values` - **`$value`** — The first argument passed to the SQL function. - **`$values`** — Further arguments passed to the SQL function.
- **`$num_args`** — The number of arguments that the SQL function takes. If this parameter is `-1`, then the SQL function may take any number of arguments.
- **`$flags`** — A bitmask of flags. Currently, only `Pdo\Sqlite::DETERMINISTIC` is supported, which specifies that the function always returns the same result given the same inputs within a single SQL statement.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`Pdo\Sqlite::createFunction()` example**

In this example, we have a function that calculates the SHA256 sum of a string, and then reverses it. When the SQL statement executes, it returns the value of the filename transformed by our function. The data returned in `$rows` contains the processed result.

The beauty of this technique is that there is no need to process the result using a  loop after the query.

```php


<?php
function sha256_and_reverse($string)
{
    return strrev(hash('sha256', $string));
}

$db = new Pdo\Sqlite('sqlite::sqlitedb');
$db->createFunction('sha256rev', 'sha256_and_reverse', 1);
$rows = $db->query('SELECT sha256rev(filename) FROM files')->fetchAll();
?>

   
```

 TODO <simpara xmlns="http://docbook.org/ns/docbook">The above example will output:</simpara> <screen> <![CDATA[ Code example ]]> </screen> 

## See Also

 `Pdo\Sqlite::createAggregate()` `Pdo\Sqlite::createCollation()` `sqlite_create_function()` `sqlite_create_aggregate()`
