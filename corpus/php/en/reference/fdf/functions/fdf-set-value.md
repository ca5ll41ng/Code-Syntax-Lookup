---
id: "en-php-function-function-fdf-set-value"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_value"
title: "Set the value of a field"
signature: "bool fdf_set_value(resource $fdf_document, string $fieldname, mixed $value, [int $isName = ...])"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the value of a field

## Description

```php
bool fdf_set_value(resource $fdf_document, string $fieldname, mixed $value, [int $isName = ...])
```

Sets the `$value` for the given field.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`** — Name of the FDF field, as a string.
- **`$value`** — This parameter will be stored as a string unless it is an array. In this case all array elements will be stored as a value array.
- **`$isName`**
  > In older versions of the FDF toolkit last parameter determined if the field value was to be converted to a PDF Name (= 1) or set to a PDF String (= 0).
  >
  > The value is no longer used in the current toolkit version 5.0. For compatibility reasons it is still supported as an optional parameter, but ignored internally.



## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_get_value()` `fdf_remove_item()`
