---
id: "en-php-function-function-fdf-get-status"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_status"
title: "Get the value of the /STATUS key"
signature: "string fdf_get_status(resource $fdf_document)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value of the /STATUS key

## Description

```php
string fdf_get_status(resource $fdf_document)
```

Gets the value of the `/STATUS` key.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.

## Return Values

Returns the key value, as a string.

## See Also

 `fdf_set_status()`
