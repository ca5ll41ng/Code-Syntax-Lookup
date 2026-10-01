---
id: "en-php-function-function-fdf-get-value"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_value"
title: "Get the value of a field"
signature: "mixed fdf_get_value(resource $fdf_document, string $fieldname, int $which = -1)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of a field

## Description

```php
mixed fdf_get_value(resource $fdf_document, string $fieldname, int $which = -1)
```

Gets the value for the requested field.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`** — Name of the FDF field, as a string.
- **`$which`** — Elements of an array field can be retrieved by passing this optional parameter, starting at zero. For non-array fields, this parameter will be ignored.

## Return Values

Returns the field value.

## See Also

 `fdf_set_value()`
