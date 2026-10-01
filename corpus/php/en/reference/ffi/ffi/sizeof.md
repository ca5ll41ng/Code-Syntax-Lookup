---
id: "en-php-function-ffi-sizeof"
language: "php"
lang: "en"
category: "function"
name: "FFI::sizeof"
title: "Gets the size of C data or types"
signature: "public static int FFI::sizeof(FFI\\CData|FFI\\CType $ptr)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.sizeof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the size of C data or types

## Description

```php
public static int FFI::sizeof(FFI\CData|FFI\CType $ptr)
```

Returns the size of the given `FFI\CData` or `FFI\CType` object.

## Parameters

- **`$ptr`** — The handle of the C data or type.

## Return Values

The size of the memory area pointed at by `$ptr`.
