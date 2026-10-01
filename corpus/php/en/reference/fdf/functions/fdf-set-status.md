---
id: "en-php-function-function-fdf-set-status"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_status"
title: "Set the value of the /STATUS key"
signature: "bool fdf_set_status(resource $fdf_document, string $status)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the value of the /STATUS key

## Description

```php
bool fdf_set_status(resource $fdf_document, string $status)
```

Sets the value of the `/STATUS` key. When a client receives a FDF with a status set it will present the value in an alert box.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$status`**

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_get_status()`
