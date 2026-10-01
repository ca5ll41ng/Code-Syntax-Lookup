---
id: "en-php-function-function-fdf-set-encoding"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_encoding"
title: "Sets FDF character encoding"
signature: "bool fdf_set_encoding(resource $fdf_document, string $encoding)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets FDF character encoding

## Description

```php
bool fdf_set_encoding(resource $fdf_document, string $encoding)
```

Sets the character encoding for the FDF document.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$encoding`** — The encoding name. The following values are supported: "`Shift-JIS`", "`UHC`", "`GBK`" and "`BigFive`". — An empty string resets the encoding to the default `PDFDocEncoding/Unicode` scheme.

## Return Values

Returns `true` on success or `false` on failure.
