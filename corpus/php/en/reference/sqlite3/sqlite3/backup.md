---
id: "en-php-function-sqlite3-backup"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::backup"
title: "Backup one database to another database"
signature: "public bool SQLite3::backup(SQLite3 $destination, string $sourceDatabase = \"main\", string $destinationDatabase = \"main\")"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.backup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Backup one database to another database

## Description

```php
public bool SQLite3::backup(SQLite3 $destination, string $sourceDatabase = "main", string $destinationDatabase = "main")
```

`SQLite3::backup()` copies the contents of one database into another, overwriting the contents of the destination database. It is useful either for creating backups of databases or for copying in-memory databases to or from persistent files.

> As of SQLite 3.27.0 (2019-02-07), it is also possible to use the statement `VACUUM INTO 'file.db';` to backup the database to a new file.

## Parameters

- **`$destination`** — A database connection opened with `SQLite3::open()`.
- **`$sourceDatabase`** — The database name is `"main"` for the main database, `"temp"` for the temporary database, or the name specified after the `AS` keyword in an `ATTACH` statement for an attached database.
- **`$destinationDatabase`** — Analogous to `$sourceDatabase` but for the `$destination`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Backup an existing database**

```php


<?php
// $conn is a connection to an already opened sqlite3 database

$backup = new SQLite3('backup.sqlite');
$conn->backup($backup);
?>

   
```
