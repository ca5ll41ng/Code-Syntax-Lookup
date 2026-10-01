---
id: "en-php-function-function-variant-get-type"
language: "php"
lang: "en"
category: "function"
name: "variant_get_type"
title: "Returns the type of a variant object"
signature: "int variant_get_type(variant $variant)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-get-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the type of a variant object

## Description

```php
int variant_get_type(variant $variant)
```

Returns the type of a variant object.

## Parameters

- **`$variant`** — The variant object.

## Return Values

This function returns an integer value that indicates the type of `$variant`, which can be an instance of `class.com`, `class.dotnet` or `class.variant` classes. The return value can be compared to one of the `VT_{*}` constants.

The return value for COM and DOTNET objects will usually be `VT_DISPATCH`; the only reason this function works for those classes is because COM and DOTNET are descendants of VARIANT.

## See Also

`variant_set_type()`
