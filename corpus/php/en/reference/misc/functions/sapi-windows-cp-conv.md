---
id: "en-php-function-function-sapi-windows-cp-conv"
language: "php"
lang: "en"
category: "function"
name: "sapi_windows_cp_conv"
title: "Convert string from one codepage to another"
signature: "string|null sapi_windows_cp_conv(int|string $in_codepage, int|string $out_codepage, string $subject)"
module: "misc"
source_url: "https://www.php.net/manual/en/function.sapi-windows-cp-conv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert string from one codepage to another

## Description

```php
string|null sapi_windows_cp_conv(int|string $in_codepage, int|string $out_codepage, string $subject)
```

Convert string from one codepage to another.

## Parameters

- **`$in_codepage`** — The codepage of the `$subject` string. Either the codepage name or identifier.
- **`$out_codepage`** — The codepage to convert the `$subject` string to. Either the codepage name or identifier.
- **`$subject`** — The string to convert.

## Return Values

The `$subject` string converted to `$out_codepage`, or `null` on failure.

## Errors/Exceptions

This function issues E_WARNING level errors, if invalid codepages are given, or if the subject is not valid for `$in_codepage`.

## See Also

 `sapi_windows_cp_get()` `iconv()`
