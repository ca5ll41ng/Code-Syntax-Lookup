---
id: "en-php-function-sqlite3-createfunction"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::createFunction"
title: "Registers a PHP function for use as an SQL scalar function"
signature: "public bool SQLite3::createFunction(string $name, callable $callback, int $argCount = -1, int $flags = 0)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.createfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a PHP function for use as an SQL scalar function

## Description

```php
public bool SQLite3::createFunction(string $name, callable $callback, int $argCount = -1, int $flags = 0)
```

Registers a PHP function or user-defined function for use as an SQL scalar function for use within SQL statements.

## Parameters

- **`$name`** — Name of the SQL function to be created or redefined.
- **`$callback`** — The name of a PHP function or user-defined function to apply as a callback, defining the behavior of the SQL function. — This function need to be defined as: `mixed``{callback}()` `mixed``$value` `mixed``$values` - **`$value`** — The first argument passed to the SQL function. - **`$values`** — Further arguments passed to the SQL function.
- **`$argCount`** — The number of arguments that the SQL function takes. If this parameter is `-1`, then the SQL function may take any number of arguments.
- **`$flags`** — A bitwise conjunction of flags. Currently, only `SQLITE3_DETERMINISTIC` is supported, which specifies that the function always returns the same result given the same inputs within a single SQL statement.

## Return Values

Returns `true` upon successful creation of the function, `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.1.4 | The `$flags` parameter has been added. |

## Examples

**`SQLite3::createFunction()` example**

```php


<?php
function my_udf_md5($string) {
    return hash('md5', $string);
}

$db = new SQLite3('mysqlitedb.db');
$db->createFunction('my_udf_md5', 'my_udf_md5');

var_dump($db->querySingle('SELECT my_udf_md5("test")'));
?>

    
```

The above example will output something similar to:

```text


string(32) "098f6bcd4621d373cade4e832627b4f6"

    
```
