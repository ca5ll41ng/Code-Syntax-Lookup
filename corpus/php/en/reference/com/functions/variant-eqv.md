---
id: "en-php-function-function-variant-eqv"
language: "php"
lang: "en"
category: "function"
name: "variant_eqv"
title: "Performs a bitwise equivalence on two variants"
signature: "variant variant_eqv(mixed $left, mixed $right)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-eqv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs a bitwise equivalence on two variants

## Description

```php
variant variant_eqv(mixed $left, mixed $right)
```

Performs a bitwise equivalence on two variants.

## Parameters

- **`$left`** — The left operand.
- **`$right`** — The right operand.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

If each bit in `$left` is equal to the corresponding bit in `$right` then `true` is returned, otherwise `false` is returned.

## Errors/Exceptions

Throws a `com_exception` on failure.
