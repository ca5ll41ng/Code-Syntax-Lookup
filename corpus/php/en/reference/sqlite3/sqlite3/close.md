---
id: "en-php-function-sqlite3-close"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::close"
title: "Closes the database connection"
signature: "public bool SQLite3::close()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes the database connection

## Description

```php
public bool SQLite3::close()
```

Closes the database connection.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SQLite3::close()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');
$db->close();
?>

    
```
