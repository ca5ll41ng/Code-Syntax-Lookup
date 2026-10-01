---
id: "en-php-function-function-fdf-get-ap"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_ap"
title: "Get the appearance of a field"
signature: "bool fdf_get_ap(resource $fdf_document, string $field, int $face, string $filename)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-ap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the appearance of a field

## Description

```php
bool fdf_get_ap(resource $fdf_document, string $field, int $face, string $filename)
```

Gets the appearance of a `$field` (i.e. the value of the /AP key) and stores it in a file.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$field`**
- **`$face`** — The possible values are `FDFNormalAP`, `FDFRolloverAP` and `FDFDownAP`.
- **`$filename`** — The appearance will be stored in this parameter.

## Return Values

Returns `true` on success or `false` on failure.
