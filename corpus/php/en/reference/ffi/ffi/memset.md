---
id: "en-php-function-ffi-memset"
language: "php"
lang: "en"
category: "function"
name: "FFI::memset"
title: "Fills a memory area"
signature: "public static void FFI::memset(FFI\\CData $ptr, int $value, int $size)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.memset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fills a memory area

## Description

```php
public static void FFI::memset(FFI\CData $ptr, int $value, int $size)
```

Fills `$size` bytes of the memory area pointed to by `$ptr` with the given byte `$value`.

## Parameters

- **`$ptr`** — The start of the memory area to fill.
- **`$value`** — The byte to fill with.
- **`$size`** — The number of bytes to fill.

## Return Values

No value is returned.
