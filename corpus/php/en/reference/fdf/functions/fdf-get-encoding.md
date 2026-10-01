---
id: "en-php-function-function-fdf-get-encoding"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_encoding"
title: "Get the value of the /Encoding key"
signature: "string fdf_get_encoding(resource $fdf_document)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of the /Encoding key

## Description

```php
string fdf_get_encoding(resource $fdf_document)
```

Gets the value of the `/Encoding` key.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.

## Return Values

Returns the encoding as a string. An empty string is returned if the default `PDFDocEncoding/Unicode` scheme is used.

## See Also

 `fdf_set_encoding()`
