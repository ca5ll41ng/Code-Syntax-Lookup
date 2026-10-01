---
id: "en-php-function-function-dbase-pack"
language: "php"
lang: "en"
category: "function"
name: "dbase_pack"
title: "Packs a database"
signature: "bool dbase_pack(resource $database)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-pack.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Packs a database

## Description

```php
bool dbase_pack(resource $database)
```

Packs the specified database by permanently deleting all records marked for deletion using `dbase_delete_record()`. Note that the file will be truncated after successful packing (contrary to dBASE III's PACK command).

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## Examples

**Emptying a dBase database**

```php


<?php

// open in read-write mode
$db = dbase_open('/tmp/test.dbf', 2);

if ($db) {
  $record_numbers = dbase_numrecords($db);
  for ($i = 1; $i <= $record_numbers; $i++) {
      dbase_delete_record($db, $i);
  }
  // expunge the database
  dbase_pack($db);
}

?>

    
```

## See Also

`dbase_delete_record()`
