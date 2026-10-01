---
id: "en-php-function-ffi-scope"
language: "php"
lang: "en"
category: "function"
name: "FFI::scope"
title: "Instantiates an FFI object with C declarations parsed during preloading"
signature: "public static FFI FFI::scope(string $name)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.scope.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Instantiates an FFI object with C declarations parsed during preloading

## Description

```php
public static FFI FFI::scope(string $name)
```

Instantiates an FFI object with C declarations parsed during preloading.

The `FFI::scope()` method is safe to call multiple times for the same scope. Multiple references to the same scope may be loaded at the same time.

## Parameters

- **`$name`** — The scope name defined by a special `FFI_SCOPE` define.

## Return Values

Returns the freshly created `FFI` object.

## See Also

 `FFI::load()`
