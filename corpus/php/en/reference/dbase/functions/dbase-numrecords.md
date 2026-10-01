---
id: "en-php-function-function-dbase-numrecords"
language: "php"
lang: "en"
category: "function"
name: "dbase_numrecords"
title: "Gets the number of records in a database"
signature: "int dbase_numrecords(resource $database)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-numrecords.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of records in a database

## Description

```php
int dbase_numrecords(resource $database)
```

Gets the number of records (rows) in the specified database.

> Records which are marked as deleted are counted as well.

> Record numbers are between 1 and `dbase_numrecords($db)`, while field numbers are between 0 and `dbase_numfields($db)-1`.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.

## Return Values

The number of records in the database, or `false` if an error occurs.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## Examples

**Looping over all the records of the database**

```php


<?php

// open in read-only mode
$db = dbase_open('/tmp/test.dbf', 0);

if ($db) {
  $record_numbers = dbase_numrecords($db);
  for ($i = 1; $i <= $record_numbers; $i++) {
      $record = dbase_get_record($db, $i);
      if (!$record['deleted']) {
          // do something with the $record
      } else {
          // do something with the deleted $record or ignore it
      }
  }
}

?>

    
```

## See Also

`dbase_numfields()`
