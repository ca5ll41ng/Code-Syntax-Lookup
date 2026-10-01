---
id: "en-php-function-sqlite3-changes"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::changes"
title: "Returns the number of database rows that were changed (or inserted or deleted) by the most recent SQL statement"
signature: "public int SQLite3::changes()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.changes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of database rows that were changed (or inserted or deleted) by the most recent SQL statement

## Description

```php
public int SQLite3::changes()
```

Returns the number of database rows that were changed (or inserted or deleted) by the most recent SQL statement.

## Parameters

This function has no parameters.

## Return Values

Returns an `int` value corresponding to the number of database rows changed (or inserted or deleted) by the most recent SQL statement.

## Examples

**`SQLite3::changes()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');

$query = $db->exec('UPDATE counter SET views=0 WHERE page="test"');
if ($query) {
    echo 'Number of rows modified: ', $db->changes();
}
?>

    
```
