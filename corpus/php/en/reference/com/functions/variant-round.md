---
id: "en-php-function-function-variant-round"
language: "php"
lang: "en"
category: "function"
name: "variant_round"
title: "Rounds a variant to the specified number of decimal places"
signature: "variant|null variant_round(mixed $value, int $decimals)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-round.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rounds a variant to the specified number of decimal places

## Description

```php
variant|null variant_round(mixed $value, int $decimals)
```

Returns the value of `$value` rounded to `$decimals` decimal places.

## Parameters

- **`$value`** — The variant.
- **`$decimals`** — Number of decimal places.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

Returns the rounded value, or `null` on failure.

## See Also

`round()`
