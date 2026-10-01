---
id: "en-php-function-function-variant-add"
language: "php"
lang: "en"
category: "function"
name: "variant_add"
title: "\"Adds\" two variant values together and returns the result"
signature: "variant variant_add(mixed $left, mixed $right)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# "Adds" two variant values together and returns the result

## Description

```php
variant variant_add(mixed $left, mixed $right)
```

Adds `$left` to `$right` using the following rules (taken from the MSDN library), which correspond to those of Visual Basic:

| If | Then |
| --- | --- |
| Both expressions are of the string type | Concatenation |
| One expression is a string type and the other a character | Addition |
| One expression is numeric and the other is a string | Addition |
| Both expressions are numeric | Addition |
| Either expression is NULL | NULL is returned |
| Both expressions are empty | Integer subtype is returned |

## Parameters

- **`$left`** — The left operand.
- **`$right`** — The right operand.

> As with all the variant arithmetic functions, the parameters for this function can be either a PHP native type (integer, string, floating point, boolean or `null`), or an instance of a COM, VARIANT or DOTNET class. PHP native types will be converted to variants using the same rules as found in the constructor for the `class.variant` class. COM and DOTNET objects will have the value of their default property taken and used as the variant value.
>
> The variant arithmetic functions are wrappers around the similarly named functions in the COM library; for more information on these functions, consult the MSDN library. The PHP functions are named slightly differently; for example `variant_add()` in PHP corresponds to `VarAdd()` in the MSDN documentation.

## Return Values

Returns the result.

## Errors/Exceptions

Throws a `com_exception` on failure.

## See Also

`variant_sub()`
