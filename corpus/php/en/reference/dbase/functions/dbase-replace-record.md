---
id: "en-php-function-function-dbase-replace-record"
language: "php"
lang: "en"
category: "function"
name: "dbase_replace_record"
title: "Replaces a record in a database"
signature: "bool dbase_replace_record(resource $database, array $data, int $number)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-replace-record.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces a record in a database

## Description

```php
bool dbase_replace_record(resource $database, array $data, int $number)
```

Replaces the given record in the database with the given data.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.
- **`$data`** — An indexed array of data. The number of items must be equal to the number of fields in the database, otherwise `dbase_replace_record()` will fail.
  > If you're using `dbase_get_record()` return value for this parameter, remember to reset the key named `deleted`.


- **`$number`** — An integer which spans from 1 to the number of records in the database (as returned by `dbase_numrecords()`).

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## Examples

**Updating a record in the database**

```php


<?php

// open in read-write mode
$db = dbase_open('/tmp/test.dbf', 2);

if ($db) {
  // gets the old row
  $row = dbase_get_record_with_names($db, 1);
  
  // remove the 'deleted' entry
  unset($row['deleted']);
  
  // Update the date field with the current timestamp
  $row['date'] = date('Ymd');
  
  // convert the row to an indexed array
  $row = array_values($row);

  // Replace the record
  dbase_replace_record($db, $row, 1);
  dbase_close($db);
}

?>

    
```

## Notes

 {{{ 

> Boolean fields result in an `int` element value (`0` or `1`) when retrieved via `dbase_get_record()` or `dbase_get_record_with_names()`. If they are written back, this results in the value becoming `0`, so care has to be taken to properly adjust the values.

 }}} 

## See Also

`dbase_add_record()` `dbase_delete_record()`
