---
id: "en-php-function-ffi-memcpy"
language: "php"
lang: "en"
category: "function"
name: "FFI::memcpy"
title: "Copies one memory area to another"
signature: "public static void FFI::memcpy(FFI\\CData $to, FFI\\CData|string $from, int $size)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.memcpy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copies one memory area to another

## Description

```php
public static void FFI::memcpy(FFI\CData $to, FFI\CData|string $from, int $size)
```

Copies `$size` bytes from the memory area `$from` to the memory area `$to`.

## Parameters

- **`$to`** — The start of the memory area to copy to.
- **`$from`** — The start of the memory area to copy from.
- **`$size`** — The number of bytes to copy.

## Return Values

No value is returned.
