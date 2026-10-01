---
id: "en-php-function-function-dbase-open"
language: "php"
lang: "en"
category: "function"
name: "dbase_open"
title: "Opens a database"
signature: "resource|false dbase_open(string $path, int $mode)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Opens a database

## Description

```php
resource|false dbase_open(string $path, int $mode)
```

`dbase_open()` opens a dBase database with the given access mode.

> This function is affected by open_basedir.

## Parameters

- **`$path`** — The path of the database. It can be a relative or absolute path to the file where dBase will store your data.
- **`$mode`** — An integer which correspond to those for the open() system call (Typically 0 means read-only, 1 means write-only, and 2 means read and write).
  > You can't open a dBase file in write-only mode as the function will fail to read the headers information and thus you can't use 1 as `$mode`.

 — As of dbase 7.0.0 you can use `DBASE_RDONLY` and `DBASE_RDWR`, respectively, to specify the `$mode`.

## Return Values

Returns a database resource on success, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | The return value is now a `resource` instead of an `int`. |

## Examples

**Opening a dBase database file**

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

`dbase_create()` `dbase_close()`
