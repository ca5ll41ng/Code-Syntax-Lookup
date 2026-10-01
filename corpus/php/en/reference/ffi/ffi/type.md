---
id: "en-php-function-ffi-type"
language: "php"
lang: "en"
category: "function"
name: "FFI::type"
title: "Creates an FFI\\CType object from a C declaration"
signature: "public FFI\\CType|null FFI::type(string $type)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an FFI\CType object from a C declaration

## Description

```php
public FFI\CType|null FFI::type(string $type)
```

This function creates and returns a `FFI\CType` object for the given `string` containing a C type declaration. Any type declared for the instance is allowed.

## Parameters

- **`$type`** — A valid C declaration as `string`.

## Return Values

Returns the freshly created `FFI\CType` object, or `null` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling `FFI::type()` statically is now deprecated. |
