---
id: "en-php-function-function-variant-idiv"
language: "php"
lang: "en"
category: "function"
name: "variant_idiv"
title: "Converts variants to integers and then returns the result from dividing them"
signature: "variant variant_idiv(mixed $left, mixed $right)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-idiv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts variants to integers and then returns the result from dividing them

## Description

```php
variant variant_idiv(mixed $left, mixed $right)
```

Converts `$left` and `$right` to integer values, and then performs integer division.

## Parameters

- **`$left`** — The left operand.
- **`$right`** — The right operand.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

| If | Then |
| --- | --- |
| Both expressions are of the string, date, character, boolean type | Division and integer is returned |
| One expression is a string type and the other a character | Division |
| One expression is numeric and the other is a string | Division |
| Both expressions are numeric | Division |
| Either expression is NULL | NULL is returned |
| Both expressions are empty | A `com_exception` with code `DISP_E_DIVBYZERO` is thrown |

## Errors/Exceptions

Throws a `com_exception` on failure.

## See Also

`variant_div()`
