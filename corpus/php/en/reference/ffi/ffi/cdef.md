---
id: "en-php-function-ffi-cdef"
language: "php"
lang: "en"
category: "function"
name: "FFI::cdef"
title: "Creates a new FFI object"
signature: "public static FFI FFI::cdef(string $code = \"\", string|null $lib = null)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.cdef.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new FFI object

## Description

```php
public static FFI FFI::cdef(string $code = "", string|null $lib = null)
```

Creates a new FFI object.

## Parameters

- **`$code`** — A string containing a sequence of declarations in regular C language (types, structures, functions, variables, etc). Actually, this string may be copy-pasted from C header files.
  > C preprocessor directives are not supported, i.e. #include, #define and CPP macros do not work.


- **`$lib`** — The name of a shared library file, to be loaded and linked with the definitions.
  > If `$lib` is omitted or `null`, platforms supporting `RTLD_DEFAULT` attempt to lookup symbols declared in `$code` in the normal global scope. Other systems will fail to resolve these symbols.



## Return Values

Returns the freshly created `FFI` object.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | C functions returning `void` return a PHP `null` instead of `FFI\CType::TYPE_VOID`. |
| 8.0.0 | `$lib` is nullable now. |
