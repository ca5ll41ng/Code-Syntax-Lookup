---
id: "en-php-function-ffi-load"
language: "php"
lang: "en"
category: "function"
name: "FFI::load"
title: "Loads C declarations from a C header file"
signature: "public static FFI|null FFI::load(string $filename)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.load.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Loads C declarations from a C header file

## Description

```php
public static FFI|null FFI::load(string $filename)
```

Loads C declarations from a C header file. It is possible to specify shared libraries that should be loaded, using special `FFI_LIB` defines in the loaded C header file.

## Parameters

- **`$filename`** — The name of a C header file. — C preprocessor directives are not supported, i.e. `#include`, `#define` and CPP macros do not work, except for special cases listed below. — The header file *should* contain a `#define` statement for the `FFI_SCOPE` variable, e.g.: #define FFI_SCOPE "MYLIB". Refer to the class introduction for details. — The header file *may* contain a `#define` statement for the `FFI_LIB` variable to specify the library it exposes. If it is a system library only the file name is required, e.g.: #define FFI_LIB "libc.so.6". If it is a custom library, a relative path is required, e.g.: #define FFI_LIB "./mylib.so".

## Return Values

Returns the freshly created `FFI` object, or `null` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | `FFI::load()` is now allowed in preload scripts when the current system user is the same as the one defined in the `opcache.preload_user` configuration directive. |

## See Also

 `FFI::scope()`
