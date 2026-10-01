---
id: "en-php-function-function-variant-mul"
language: "php"
lang: "en"
category: "function"
name: "variant_mul"
title: "Multiplies the values of the two variants"
signature: "variant variant_mul(mixed $left, mixed $right)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-mul.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Multiplies the values of the two variants

## Description

```php
variant variant_mul(mixed $left, mixed $right)
```

Multiplies `$left` by `$right`.

## Parameters

- **`$left`** — The left operand.
- **`$right`** — The right operand.

Boolean values are converted to -1 for `false` and 0 for `true`.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

| If | Then |
| --- | --- |
| Both expressions are of the string, date, character, boolean type | Multiplication |
| One expression is a string type and the other a character | Multiplication |
| One expression is numeric and the other is a string | Multiplication |
| Both expressions are numeric | Multiplication |
| Either expression is NULL | NULL is returned |
| Both expressions are empty | Empty string is returned |

## Errors/Exceptions

Throws a `com_exception` on failure.

## See Also

`variant_div()` `variant_idiv()`
