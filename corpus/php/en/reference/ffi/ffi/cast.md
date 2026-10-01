---
id: "en-php-function-ffi-cast"
language: "php"
lang: "en"
category: "function"
name: "FFI::cast"
title: "Performs a C type cast"
signature: "public FFI\\CData|null FFI::cast(FFI\\CType|string $type, FFI\\CData|int|float|bool|null $ptr)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.cast.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs a C type cast

## Description

```php
public FFI\CData|null FFI::cast(FFI\CType|string $type, FFI\CData|int|float|bool|null $ptr)
```

`FFI::cast()` creates a new `FFI\CData` object, that references the same C data structure, but is associated with a different type. The resulting object does not own the C data, and the source `$ptr` must survive the result. The C type may be specified as a `string` with any valid C type declaration or as `FFI\CType` object, created before. Any type declared for the instance is allowed.

## Parameters

- **`$type`** — A valid C declaration as `string`, or an instance of `FFI\CType` which has already been created.
- **`$ptr`** — The handle of the pointer to a C data structure.

## Return Values

Returns the freshly created `FFI\CData` object.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling `FFI::cast()` statically is now deprecated. |
