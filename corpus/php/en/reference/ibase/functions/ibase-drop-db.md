---
id: "en-php-function-function-ibase-drop-db"
language: "php"
lang: "en"
category: "function"
name: "ibase_drop_db"
title: "Drops a database"
signature: "bool ibase_drop_db(resource $connection = null)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-drop-db.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Drops a database

## Description

```php
bool ibase_drop_db(resource $connection = null)
```

This functions drops a database that was opened by either `ibase_connect()` or `ibase_pconnect()`. The database is closed and deleted from the server.

## Parameters

- **`$connection`** — An InterBase link identifier. If omitted, the last opened link is assumed.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ibase_connect()` `ibase_pconnect()`
