---
id: "en-php-function-function-gmp-div-qr"
language: "php"
lang: "en"
category: "function"
name: "gmp_div_qr"
title: "Divide numbers and get quotient and remainder"
signature: "array gmp_div_qr(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-div-qr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Divide numbers and get quotient and remainder

## Description

```php
array gmp_div_qr(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO)
```

The function divides `$num1` by `$num2`.

## Parameters

- **`$num1`** — The number being divided. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — The number that `$num1` is being divided by. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$rounding_mode`** — See the `gmp_div_q()` function for description of the `$rounding_mode` argument.

## Return Values

Returns an `array`, with the first element being `[n/d]` (the integer result of the division) and the second being `(n - [n/d] * d)` (the remainder of the division).

## Examples

**Division of GMP numbers**

```php


<?php
$a = gmp_init("0x41682179fbf5");
$res = gmp_div_qr($a, "0xDEFE75");
printf("Result is: q - %s, r - %s",
       gmp_strval($res[0]), gmp_strval($res[1]));
?>

    
```

## See Also

`gmp_div_q()` `gmp_div_r()`
