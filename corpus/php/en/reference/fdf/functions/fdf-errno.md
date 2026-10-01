---
id: "en-php-function-function-fdf-errno"
language: "php"
lang: "en"
category: "function"
name: "fdf_errno"
title: "Return error code for last fdf operation"
signature: "int fdf_errno()"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return error code for last fdf operation

## Description

```php
int fdf_errno()
```

Gets the error code set by the last FDF function call.

A textual description of the error may be obtained using `fdf_error()`.

## Parameters

This function has no parameters.

## Return Values

Returns the error code as an integer, or zero if there was no errors.

## See Also

 `fdf_error()`
