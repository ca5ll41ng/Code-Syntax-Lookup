---
id: "en-php-function-sqlite3-busytimeout"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::busyTimeout"
title: "Sets the busy connection handler"
signature: "public bool SQLite3::busyTimeout(int $milliseconds)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.busytimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the busy connection handler

## Description

```php
public bool SQLite3::busyTimeout(int $milliseconds)
```

Sets a busy handler that will sleep until the database is not locked or the timeout is reached.

## Parameters

- **`$milliseconds`** — The milliseconds to sleep. Setting this value to a value less than or equal to zero, will turn off an already set timeout handler.

## Return Values

Returns `true` on success, or `false` on failure.
