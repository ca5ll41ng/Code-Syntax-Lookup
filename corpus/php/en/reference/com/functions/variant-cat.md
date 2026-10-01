---
id: "en-php-function-function-variant-cat"
language: "php"
lang: "en"
category: "function"
name: "variant_cat"
title: "Concatenates two variant values together and returns the result"
signature: "variant variant_cat(mixed $left, mixed $right)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-cat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Concatenates two variant values together and returns the result

## Description

```php
variant variant_cat(mixed $left, mixed $right)
```

Concatenates `$left` with `$right` and returns the result.

This function is notionally equivalent to `$left` `.` `$right`.

## Parameters

- **`$left`** — The left operand.
- **`$right`** — The right operand.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

Returns the result of the concatenation.

## Errors/Exceptions

Throws a `com_exception` on failure.

## See Also

`language.operators.string` for the string concatenation operator
