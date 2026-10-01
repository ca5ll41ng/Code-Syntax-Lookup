---
id: "en-php-function-ffi-ctype-getfuncparametercount"
language: "php"
lang: "en"
category: "function"
name: "FFI\\CType::getFuncParameterCount"
title: "Retrieve the count of parameters of a function type"
signature: "public int FFI\\CType::getFuncParameterCount()"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi-ctype.getfuncparametercount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the count of parameters of a function type

## Description

```php
public int FFI\CType::getFuncParameterCount()
```

## Parameters

This function has no parameters.

## Return Values

Returns the number of parameters for the underlying function type. If the underlying type is not a function, an FFI\Exception is thrown.
