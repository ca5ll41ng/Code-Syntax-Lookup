---
id: "en-php-function-function-db2-field-num"
language: "php"
lang: "en"
category: "function"
name: "db2_field_num"
title: "Returns the position of the named column in a result set"
signature: "int|false db2_field_num(resource $stmt, int|string $column)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-field-num.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the position of the named column in a result set

## Description

```php
int|false db2_field_num(resource $stmt, int|string $column)
```

Returns the position of the named column in a result set.

## Parameters

- **`$stmt`** — Specifies a statement resource containing a result set.
- **`$column`** — Specifies the column in the result set. This can either be an integer representing the 0-indexed position of the column, or a string containing the name of the column.

## Return Values

Returns an integer containing the 0-indexed position of the named column in the result set. If the specified column does not exist in the result set, `db2_field_num()` returns `false`.

## See Also

 `db2_field_display_size()` `db2_field_name()` `db2_field_precision()` `db2_field_scale()` `db2_field_type()` `db2_field_width()`
