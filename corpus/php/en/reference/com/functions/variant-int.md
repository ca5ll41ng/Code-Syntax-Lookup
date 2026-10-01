---
id: "en-php-function-function-variant-int"
language: "php"
lang: "en"
category: "function"
name: "variant_int"
title: "Returns the integer portion of a variant"
signature: "variant variant_int(mixed $value)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-int.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the integer portion of a variant

## Description

```php
variant variant_int(mixed $value)
```

Gets the integer portion of a variant.

## Parameters

- **`$value`** — The variant.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

If `$value` is negative, then the first negative integer less than or equal to the variant is returned, otherwise returns the integer portion of the value of `$value`.

## Errors/Exceptions

Throws a `com_exception` on failure.

## See Also

`variant_fix()` `variant_round()` `floor()` `ceil()` `round()`
