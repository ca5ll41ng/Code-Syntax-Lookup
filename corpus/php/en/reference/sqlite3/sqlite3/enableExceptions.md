---
id: "en-php-function-sqlite3-enableexceptions"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::enableExceptions"
title: "Enable throwing exceptions"
signature: "public bool SQLite3::enableExceptions(bool $enable = false)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.enableexceptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enable throwing exceptions

## Description

```php
public bool SQLite3::enableExceptions(bool $enable = false)
```

Controls whether the `SQLite3` instance will throw exceptions or warnings on error.

## Parameters

- **`$enable`** — When `true`, the `SQLite3` instance, and `SQLite3Stmt` and `SQLite3Result` instances derived from it, will throw exceptions on error. — When `false`, the `SQLite3` instance, and `SQLite3Stmt` and `SQLite3Result` instances derived from it, will raise warnings on error. — For either mode, the error code and message, if any, will be available via `SQLite3::lastErrorCode()` and `SQLite3::lastErrorMsg()` respectively.

## Return Values

Returns the old value; `true` if exceptions were enabled, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling `SQLite3::enableExceptions()` with `$enable` as `false` will trigger a `E_DEPRECATED` warning. |

## Examples

**`SQLite3::enableExceptions()` example**

```php


<?php
$sqlite = new SQLite3(':memory:');
try {
    $sqlite->exec('create table foo');
    $sqlite->enableExceptions(true);
    $sqlite->exec('create table bar');
} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage();
}
?>

   
```

The above example will output something similar to:

```php


Warning: SQLite3::exec(): near "foo": syntax error in example.php on line 4
Caught exception: near "bar": syntax error

   
```
