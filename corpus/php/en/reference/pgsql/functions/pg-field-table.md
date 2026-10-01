---
id: "en-php-function-function-pg-field-table"
language: "php"
lang: "en"
category: "function"
name: "pg_field_table"
title: "Returns the name or oid of the tables field"
signature: "string|int|false pg_field_table(PgSql\\Result $result, int $field, bool $oid_only = false)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-field-table.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the name or oid of the tables field

## Description

```php
string|int|false pg_field_table(PgSql\Result $result, int $field, bool $oid_only = false)
```

`pg_field_table()` returns the name of the table that field belongs to, or the table's oid if `$oid_only` is `true`.

## Parameters

- **`$result`** — An `PgSql\Result` instance, returned by `pg_query()`, `pg_query_params()` or `pg_execute()`(among others).
- **`$field`** — Field number, starting from 0.
- **`$oid_only`** — By default the tables name that field belongs to is returned but if `$oid_only` is set to `true`, then the oid will instead be returned.

## Return Values

On success either the fields table name or oid, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$result` parameter expects an `PgSql\Result` instance now; previously, a `resource` was expected. |

## Examples

**Getting table information about a field**

```php


<?php
$dbconn = pg_connect("dbname=publisher") or die("Could not connect");

$res = pg_query($dbconn, "SELECT bar FROM foo");

echo pg_field_table($res, 0);
echo pg_field_table($res, 0, true);

$res = pg_query($dbconn, "SELECT version()");
var_dump(pg_field_table($res, 0));
?>

    
```

The above example will output something similar to:

```text


foo
14379580

bool(false)

    
```

## Notes

> Returning the oid is much faster than returning the table name because fetching the table name requires a query to the database system table.

## See Also

`pg_field_name()` `pg_field_type()`
