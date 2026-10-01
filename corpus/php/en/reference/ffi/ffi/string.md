---
id: "en-php-function-ffi-string"
language: "php"
lang: "en"
category: "function"
name: "FFI::string"
title: "Creates a PHP string from a memory area"
signature: "public static string FFI::string(FFI\\CData $ptr, int|null $size = null)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a PHP string from a memory area

## Description

```php
public static string FFI::string(FFI\CData $ptr, int|null $size = null)
```

Creates a PHP `string` from `$size` bytes of the memory area pointed to by `$ptr`.

## Parameters

- **`$ptr`** — The start of the memory area from which to create a `string`.
- **`$size`** — The number of bytes to copy to the `string`. If `$size` is omitted or `null`, `$ptr` must be a zero terminated array of C `char`.

## Return Values

The freshly created PHP `string`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$size` is nullable now; previously, its default was `0`. |
