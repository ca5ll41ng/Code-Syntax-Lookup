---
id: "en-php-function-function-db2-field-width"
language: "php"
lang: "en"
category: "function"
name: "db2_field_width"
title: "Returns the width of the current value of the indicated column in a result set"
signature: "int|false db2_field_width(resource $stmt, int|string $column)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-field-width.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the width of the current value of the indicated column in a result set

## Description

```php
int|false db2_field_width(resource $stmt, int|string $column)
```

Returns the width of the current value of the indicated column in a result set. This is the maximum width of the column for a fixed-length data type, or the actual width of the column for a variable-length data type.

## Parameters

- **`$stmt`** — Specifies a statement resource containing a result set.
- **`$column`** — Specifies the column in the result set. This can either be an integer representing the 0-indexed position of the column, or a string containing the name of the column.

## Return Values

Returns an integer containing the width of the specified character or binary data type column in a result set. If the specified column does not exist in the result set, `db2_field_width()` returns `false`.

## See Also

 `db2_field_display_size()` `db2_field_name()` `db2_field_num()` `db2_field_precision()` `db2_field_scale()` `db2_field_type()`
