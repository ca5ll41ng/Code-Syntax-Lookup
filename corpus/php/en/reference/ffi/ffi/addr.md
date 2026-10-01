---
id: "en-php-function-ffi-addr"
language: "php"
lang: "en"
category: "function"
name: "FFI::addr"
title: "Creates an unmanaged pointer to C data"
signature: "public static FFI\\CData FFI::addr(FFI\\CData $ptr)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.addr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an unmanaged pointer to C data

## Description

```php
public static FFI\CData FFI::addr(FFI\CData $ptr)
```

Creates an unmanaged pointer to the C data represented by the given `FFI\CData`. The source `$ptr` must survive the resulting pointer. This function is mainly useful to pass arguments to C functions by pointer.

## Parameters

- **`$ptr`** — The handle of the pointer to a C data structure.

## Return Values

Returns the freshly created `FFI\CData` object.
