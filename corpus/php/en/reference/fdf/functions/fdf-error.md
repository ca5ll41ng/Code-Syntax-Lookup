---
id: "en-php-function-function-fdf-error"
language: "php"
lang: "en"
category: "function"
name: "fdf_error"
title: "Return error description for FDF error code"
signature: "string fdf_error(int $error_code = -1)"
module: "fdf"
source_url: "https://www.php.net/manual/en/function.fdf-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return error description for FDF error code

## Description

```php
string fdf_error(int $error_code = -1)
```

Gets a textual description for the FDF error code given in `$error_code`.

## Parameters

- **`$error_code`** — An error code obtained with `fdf_errno()`. If not provided, this function uses the internal error code set by the last operation.

## Return Values

Returns the error message as a string, or the string `no error` if nothing went wrong.

## See Also

 `fdf_errno()`
