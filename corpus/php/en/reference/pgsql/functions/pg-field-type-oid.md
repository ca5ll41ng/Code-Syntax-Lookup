---
id: "en-php-function-function-pg-field-type-oid"
language: "php"
lang: "en"
category: "function"
name: "pg_field_type_oid"
title: "Returns the type ID (OID) for the corresponding field number"
signature: "string|int pg_field_type_oid(PgSql\\Result $result, int $field)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-field-type-oid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the type ID (OID) for the corresponding field number

## Description

```php
string|int pg_field_type_oid(PgSql\Result $result, int $field)
```

`pg_field_type_oid()` returns an integer containing the OID of the base type of the given `$field` in the given `$result` instance.

You can get more information about the field type by querying PostgreSQL's `pg_type` system table using the OID obtained with this function. The PostgreSQL `format_type()` function will convert a type OID into an SQL standard type name.

> If the field uses a PostgreSQL domain (rather than a basic type), it is the OID of the domain's underlying type that is returned, rather than the OID of the domain itself.

## Parameters

- **`$result`** — An `PgSql\Result` instance, returned by `pg_query()`, `pg_query_params()` or `pg_execute()`(among others).
- **`$field`** — Field number, starting from 0.

## Return Values

The OID of the field's base type.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$result` parameter expects an `PgSql\Result` instance now; previously, a `resource` was expected. |

## Examples

**Getting information about fields**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // Assume 'title' is a varchar type
  $res = pg_query($dbconn, "select title from authors where author = 'Orwell'");

  echo "Title field type OID: ", pg_field_type_oid($res, 0);
?>

    
```

The above example will output:

```text


Title field type OID: 1043

    
```

## See Also

`pg_field_type()` `pg_field_prtlen()` `pg_field_name()`
