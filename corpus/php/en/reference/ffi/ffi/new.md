---
id: "en-php-function-ffi-new"
language: "php"
lang: "en"
category: "function"
name: "FFI::new"
title: "Creates a C data structure"
signature: "public FFI\\CData|null FFI::new(FFI\\CType|string $type, bool $owned = true, bool $persistent = false)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.new.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a C data structure

## Description

```php
public FFI\CData|null FFI::new(FFI\CType|string $type, bool $owned = true, bool $persistent = false)
```

Creates a native data structure of the given C type. Any type declared for the instance is allowed.

## Parameters

- **`$type`** — `$type` is a valid C declaration as `string`, or an instance of `FFI\CType` which has already been created.
- **`$owned`** — Whether to create owned (i.e. managed) or unmanaged data. Managed data lives together with the returned `FFI\CData` object, and is released when the last reference to that object is released by regular PHP reference counting or GC. Unmanaged data should be released by calling `FFI::free()`, when no longer needed.
- **`$persistent`** — Whether to allocate the C data structure permanently on the system heap (using `malloc()`), or on the PHP request heap (using `emalloc()`).

## Return Values

Returns the freshly created `FFI\CData` object, or `null` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling `FFI::new()` statically is now deprecated. |
