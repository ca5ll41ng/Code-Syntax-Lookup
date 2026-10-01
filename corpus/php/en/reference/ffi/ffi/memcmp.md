---
id: "en-php-function-ffi-memcmp"
language: "php"
lang: "en"
category: "function"
name: "FFI::memcmp"
title: "Compares memory areas"
signature: "public static int FFI::memcmp(string|FFI\\CData $ptr1, string|FFI\\CData $ptr2, int $size)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.memcmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares memory areas

## Description

```php
public static int FFI::memcmp(string|FFI\CData $ptr1, string|FFI\CData $ptr2, int $size)
```

Compares `$size` bytes from the memory areas `$ptr1` and `$ptr2`. Both `$ptr1` and `$ptr2` can be any native data structures (`FFI\CData`) or PHP `string`s.

## Parameters

- **`$ptr1`** — The start of one memory area.
- **`$ptr2`** — The start of another memory area.
- **`$size`** — The number of bytes to compare.

## Return Values

Returns a value less than `0` if the contents of the memory area starting at `$ptr1` are considered less than the contents of the memory area starting at `$ptr2`, a value greater than `0` if the contents of the first memory area are considered greater than the second, and `0` if they are equal.
