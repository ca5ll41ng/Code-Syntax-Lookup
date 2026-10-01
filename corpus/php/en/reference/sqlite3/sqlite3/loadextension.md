---
id: "en-php-function-sqlite3-loadextension"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::loadExtension"
title: "Attempts to load an SQLite extension library"
signature: "public bool SQLite3::loadExtension(string $name)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.loadextension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attempts to load an SQLite extension library

## Description

```php
public bool SQLite3::loadExtension(string $name)
```

Attempts to load an SQLite extension library.

## Parameters

- **`$name`** — The name of the library to load. The library must be located in the directory specified in the configure option sqlite3.extension_dir.

## Return Values

Returns `true` if the extension is successfully loaded, `false` on failure.

## Examples

**`SQLite3::loadExtension()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');
$db->loadExtension('libagg.so');
?>

    
```
