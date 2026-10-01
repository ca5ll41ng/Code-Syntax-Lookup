---
id: "en-php-function-ffi-alignof"
language: "php"
lang: "en"
category: "function"
name: "FFI::alignof"
title: "Gets the alignment"
signature: "public static int FFI::alignof(FFI\\CData|FFI\\CType $ptr)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.alignof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the alignment

## Description

```php
public static int FFI::alignof(FFI\CData|FFI\CType $ptr)
```

Gets the alignment of the given `FFI\CData` or `FFI\CType` object.

## Parameters

- **`$ptr`** — The handle of the C data or type.

## Return Values

Returns the alignment of the given `FFI\CData` or `FFI\CType` object.
