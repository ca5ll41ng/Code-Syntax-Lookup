---
id: "en-php-function-ffi-typeof"
language: "php"
lang: "en"
category: "function"
name: "FFI::typeof"
title: "Gets the FFI\\CType of FFI\\CData"
signature: "public static FFI\\CType FFI::typeof(FFI\\CData $ptr)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.typeof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the FFI\CType of FFI\CData

## Description

```php
public static FFI\CType FFI::typeof(FFI\CData $ptr)
```

Gets the `FFI\CType` object representing the type of the given `FFI\CData` object.

## Parameters

- **`$ptr`** — The handle of the pointer to a C data structure.

## Return Values

Returns the `FFI\CType` object representing the type of the given `FFI\CData` object.
