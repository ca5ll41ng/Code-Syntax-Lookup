---
id: "en-php-function-function-dbase-get-record"
language: "php"
lang: "en"
category: "function"
name: "dbase_get_record"
title: "Gets a record from a database as an indexed array"
signature: "array dbase_get_record(resource $database, int $number)"
module: "dbase"
source_url: "https://www.php.net/manual/en/function.dbase-get-record.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a record from a database as an indexed array

## Description

```php
array dbase_get_record(resource $database, int $number)
```

Gets a record from a database as an indexed array.

## Parameters

- **`$database`** — The database resource, returned by `dbase_open()` or `dbase_create()`.
- **`$number`** — The index of the record between `1` and `dbase_numrecords($dbase_identifier)`.

## Return Values

An indexed array with the record. This array will also include an associative key named `deleted` which is set to 1 if the record has been marked for deletion (see `dbase_delete_record()`).

Each field is converted to the appropriate PHP type, except:

- Dates are left as strings.
- DateTime values are converted to strings.
- Integers outside the range `PHP_INT_MIN`..`PHP_INT_MAX` are returned as strings.
- Before dbase 7.0.0, booleans (`L`) were converted to `1` or `0`.

On error, `dbase_get_record()` will return `false`.

## Changelog

|  |  |
| --- | --- |
| PECL dbase 7.0.0 | `$database` is now a `resource` instead of an `int`. |

## See Also

`dbase_get_record_with_names()`
