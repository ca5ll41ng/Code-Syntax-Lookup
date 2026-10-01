---
id: "en-php-function-ffi-ctype-getfuncparametertype"
language: "php"
lang: "en"
category: "function"
name: "FFI\\CType::getFuncParameterType"
title: "Retrieve the type of a function parameter"
signature: "public FFI\\CType FFI\\CType::getFuncParameterType(int $index)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi-ctype.getfuncparametertype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the type of a function parameter

## Description

```php
public FFI\CType FFI\CType::getFuncParameterType(int $index)
```

Returns the type of a parameter for the underlying function type.

## Parameters

- **`$index`** — Index of the function parameter, zero-based.

## Return Values

Returns the type of a parameter for the underlying function type. If the underlying type is not a function, or the given index is outside of the range of parameters of the function, an FFI\Exception is thrown.
