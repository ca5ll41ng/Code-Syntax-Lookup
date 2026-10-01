---
id: "en-php-function-function-fdf-set-flags"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_flags"
title: "Sets a flag of a field"
signature: "bool fdf_set_flags(resource $fdf_document, string $fieldname, int $whichFlags, int $newFlags)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-flags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a flag of a field

## Description

```php
bool fdf_set_flags(resource $fdf_document, string $fieldname, int $whichFlags, int $newFlags)
```

Sets certain flags of the given field.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$fieldname`** — Name of the FDF field, as a string.
- **`$whichFlags`**
- **`$newFlags`**

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_set_opt()`
