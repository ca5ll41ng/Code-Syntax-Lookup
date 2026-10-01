---
id: "en-php-function-function-dbase-add-record"
language: "php"
lang: "en"
category: "function"
name: "dbase_add_record"
title: "Adds a record to a database"
signature: "bool dbase_add_record(resource $database, array $data)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-add-record.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a record to a database

## Description

```php
bool dbase_add_record(resource $database, array $data)
```

Adds the given data to the database.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.
- **`$data`** — An indexed array of data. The number of items must be equal to the number of fields in the database, otherwise `dbase_add_record()` will fail.
  > If you're using `dbase_get_record()` return value for this parameter, remember to reset the key named `deleted`.



## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## Examples

**Inserting a record in a dBase database**

```php


<?php

// open in read-write mode
$db = dbase_open('/tmp/test.dbf', 2);

if ($db) {
  dbase_add_record($db, array(
      date('Ymd'), 
      'Maxim Topolov', 
      '23', 
      'max@example.com',
      'T'));   
  dbase_close($db);
}

?>

    
```

## See Also

`dbase_delete_record()` `dbase_replace_record()`
