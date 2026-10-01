---
id: "en-php-function-function-fdf-set-target-frame"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_target_frame"
title: "Set target frame for form display"
signature: "bool fdf_set_target_frame(resource $fdf_document, string $frame_name)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-target-frame.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set target frame for form display

## Description

```php
bool fdf_set_target_frame(resource $fdf_document, string $frame_name)
```

Sets the target frame to display a result PDF defined with `fdf_save_file()` in.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$frame_name`** — The frame name, as a string.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_save_file()`
