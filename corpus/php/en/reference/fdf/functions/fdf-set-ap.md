---
id: "en-php-function-function-fdf-set-ap"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_ap"
title: "Set the appearance of a field"
signature: "bool fdf_set_ap(resource $fdf_document, string $field_name, int $face, string $filename, int $page_number)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-ap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the appearance of a field

## Description

```php
bool fdf_set_ap(resource $fdf_document, string $field_name, int $face, string $filename, int $page_number)
```

Sets the appearance of a field (i.e. the value of the `/AP` key).

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$field_name`**
- **`$face`** — The possible values are `FDFNormalAP`, `FDFRolloverAP` and `FDFDownAP`.
- **`$filename`**
- **`$page_number`**

## Return Values

Returns `true` on success or `false` on failure.
