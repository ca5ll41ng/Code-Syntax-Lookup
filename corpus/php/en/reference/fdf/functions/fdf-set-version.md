---
id: "en-php-function-function-fdf-set-version"
language: "php"
lang: "en"
category: "function"
name: "fdf_set_version"
title: "Sets version number for a FDF file"
signature: "bool fdf_set_version(resource $fdf_document, string $version)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-set-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets version number for a FDF file

## Description

```php
bool fdf_set_version(resource $fdf_document, string $version)
```

Sets the FDF `$version` for the given document.

Some features supported by this extension are only available in newer FDF versions.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.
- **`$version`** — The version number. For the current FDF toolkit 5.0, this may be either `1.2`, `1.3` or `1.4`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `fdf_get_version()`
