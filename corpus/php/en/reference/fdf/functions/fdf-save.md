---
id: "en-php-function-function-fdf-save"
language: "php"
lang: "en"
category: "function"
name: "fdf_save"
title: "Save a FDF document"
signature: "bool fdf_save(resource $fdf_document, [string $filename = ...])"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Save a FDF document

## Description

```php
bool fdf_save(resource $fdf_document, [string $filename = ...])
```

Saves a FDF document.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$filename`** — If provided, the resulting FDF will be written in this parameter. Otherwise, this function will write the FDF to the default PHP output stream.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_close()` `fdf_create()` `fdf_save_string()`
