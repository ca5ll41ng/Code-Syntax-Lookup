---
id: "en-php-function-function-db2-field-display-size"
language: "php"
lang: "en"
category: "function"
name: "db2_field_display_size"
title: "Returns the maximum number of bytes required to display a column"
signature: "int|false db2_field_display_size(resource $stmt, int|string $column)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-field-display-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the maximum number of bytes required to display a column

## Description

```php
int|false db2_field_display_size(resource $stmt, int|string $column)
```

Returns the maximum number of bytes required to display a column in a result set.

## Parameters

- **`$stmt`** — Specifies a statement resource containing a result set.
- **`$column`** — Specifies the column in the result set. This can either be an integer representing the 0-indexed position of the column, or a string containing the name of the column.

## Return Values

Returns an integer value with the maximum number of bytes required to display the specified column. If the column does not exist in the result set, `db2_field_display_size()` returns `false`.

## See Also

 `db2_field_name()` `db2_field_num()` `db2_field_precision()` `db2_field_scale()` `db2_field_type()` `db2_field_width()`
