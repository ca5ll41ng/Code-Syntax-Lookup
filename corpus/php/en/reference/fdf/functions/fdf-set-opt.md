---
id: "en-php-function-function-fdf-set-opt"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_opt"
title: "Sets an option of a field"
signature: "bool fdf_set_opt(resource $fdf_document, string $fieldname, int $element, string $str1, string $str2)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-opt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets an option of a field

## Description

```php
bool fdf_set_opt(resource $fdf_document, string $fieldname, int $element, string $str1, string $str2)
```

Sets options of the given field.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`** — Name of the FDF field, as a string.
- **`$element`**
- **`$str1`**
- **`$str2`**

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_set_flags()`
