---
id: "en-php-function-ffi-arraytype"
language: "php"
lang: "en"
category: "function"
name: "FFI::arrayType"
title: "Dynamically constructs a new C array type"
signature: "public static FFI\\CType FFI::arrayType(FFI\\CType $type, array $dimensions)"
module: "ffi"
source_url: "https://www.php.net/manual/en/ffi.arraytype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dynamically constructs a new C array type

## Description

```php
public static FFI\CType FFI::arrayType(FFI\CType $type, array $dimensions)
```

Dynamically constructs a new C array type with elements of type defined by `$type`, and dimensions specified by `$dimensions`. In the following example $t1 and $t2 are equivalent array types: ```php <?php $t1 = FFI::type("int[2][3]"); $t2 = FFI::arrayType(FFI::type("int"), [2, 3]); ?> ```

## Parameters

- **`$type`** — A valid C declaration as `string`, or an instance of `FFI\CType` which has already been created.
- **`$dimensions`** — The dimensions of the type as `array`.

## Return Values

Returns the freshly created `FFI\CType` object.
