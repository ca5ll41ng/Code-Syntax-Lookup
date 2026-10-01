---
id: "en-php-function-ffi-free"
language: "php"
lang: "en"
category: "function"
name: "FFI::free"
title: "Releases an unmanaged data structure"
signature: "public static void FFI::free(FFI\\CData $ptr)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Releases an unmanaged data structure

## Description

```php
public static void FFI::free(FFI\CData $ptr)
```

Manually releases a previously created unmanaged data structure.

## Parameters

- **`$ptr`** — The handle of the unmanaged pointer to a C data structure.

## Return Values

No value is returned.
