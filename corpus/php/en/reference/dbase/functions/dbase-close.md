---
id: "en-php-function-function-dbase-close"
language: "php"
lang: "en"
category: "function"
name: "dbase_close"
title: "Closes a database"
signature: "bool dbase_close(resource $database)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes a database

## Description

```php
bool dbase_close(resource $database)
```

Closes the given database resource.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## Examples

**Closing a dBase database file**

```php


<?php

// open in read-only mode
$db = dbase_open('/tmp/test.dbf', 0);

if ($db) {
  // read some data ..
  
  dbase_close($db);
}

?>

    
```

## See Also

`dbase_open()` `dbase_create()`
