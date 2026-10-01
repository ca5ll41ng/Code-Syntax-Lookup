---
id: "en-php-function-function-fdf-get-version"
language: "php"
lang: "en"
category: "function"
name: "fdf_get_version"
title: "Gets version number for FDF API or file"
signature: "string fdf_get_version([resource $fdf_document = ...])"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-get-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets version number for FDF API or file

## Description

```php
string fdf_get_version([resource $fdf_document = ...])
```

Return the FDF version for the given document, or the toolkit API version number if no parameter is given.

## Parameters

- **`$fdf_document`** — The FDF document handle, returned by `fdf_create()`, `fdf_open()` or `fdf_open_string()`.

## Return Values

Returns the version as a string. For the current FDF toolkit 5.0 the API version number is `5.0` and the document version number is either `1.2`, `1.3` or `1.4`.

## See Also

 `fdf_set_version()`
