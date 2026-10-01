---
id: "en-php-function-function-bcpowmod"
language: "php"
lang: "en"
category: "function"
name: "bcpowmod"
title: "Raise an arbitrary precision number to another, reduced by a specified modulus"
signature: "string bcpowmod(string $num, string $exponent, string $modulus, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/function.bcpowmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Raise an arbitrary precision number to another, reduced by a specified modulus

## Description

```php
string bcpowmod(string $num, string $exponent, string $modulus, int|null $scale = null)
```

Use the fast-exponentiation method to raise `$num` to the power `$exponent` with respect to the modulus `$modulus`.

## Parameters

- **`$num`** — The base, as an integral string (i.e. the scale has to be zero).
- **`$exponent`** — The exponent, as an non-negative, integral string (i.e. the scale has to be zero).
- **`$modulus`** — The modulus, as an integral string (i.e. the scale has to be zero).

## Return Values

Returns the result as a string.

## Errors/Exceptions

This function throws a ValueError in the following cases: `$num`, `$exponent` or `$modulus` is not a well-formed BCMath numeric string `$num`, `$exponent` or `$modulus` has a fractional part `$exponent` is a negative value `$scale` is outside the valid range

This function throws a DivisionByZeroError exception if `$modulus` is `0`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$scale` is now nullable. |
| 8.0.0 | Now throws a ValueError instead of returning `false` if `$exponent` is a negative value. |
| 8.0.0 | Dividing by `0` now throws a DivisionByZeroError exception instead of returning `false`. |

## Examples

The following two statements are functionally identical. The `bcpowmod()` version however, executes in less time and can accept larger parameters. ```php <?php $a = bcpowmod($x, $y, $mod); $b = bcmod(bcpow($x, $y), $mod); // $a and $b are equal to each other. ?> ```

## Notes

> Because this method uses the modulus operation, numbers which are not positive integers may give unexpected results.

## See Also

`bcpow()` `bcmod()` `BcMath\Number::powmod()`
