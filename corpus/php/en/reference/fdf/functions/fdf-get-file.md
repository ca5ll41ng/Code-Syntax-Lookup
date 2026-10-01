---
id: "en-php-function-function-fdf-get-file"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_file"
title: "Get the value of the /F key"
signature: "string fdf_get_file(resource $fdf_document)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of the /F key

## Description

```php
string fdf_get_file(resource $fdf_document)
```

Gets the value of the `/F` key.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.

## Return Values

Returns the key value, as a string.

## See Also

 `fdf_set_file()`
