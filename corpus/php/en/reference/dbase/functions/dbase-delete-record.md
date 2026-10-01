---
id: "en-php-function-function-dbase-delete-record"
language: "php"
lang: "en"
category: "function"
name: "dbase_delete_record"
title: "Deletes a record from a database"
signature: "bool dbase_delete_record(resource $database, int $number)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-delete-record.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes a record from a database

## Description

```php
bool dbase_delete_record(resource $database, int $number)
```

Marks the given record to be deleted from the database.

> To actually remove the record from the database, you must also call `dbase_pack()`.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.
- **`$number`** — An integer which spans from 1 to the number of records in the database (as returned by `dbase_numrecords()`).

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## See Also

`dbase_add_record()` `dbase_replace_record()`
