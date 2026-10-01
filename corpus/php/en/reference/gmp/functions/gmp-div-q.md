---
id: "en-php-function-function-gmp-div-q"
language: "php"
lang: "en"
category: "function"
name: "gmp_div_q"
title: "Divide numbers"
signature: "GMP gmp_div_q(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-div-q.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Divide numbers

## Description

```php
GMP gmp_div_q(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO)
```

Divides `$num1` by `$num2` and returns the integer result.

## Parameters

- **`$num1`** — The number being divided. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — The number that `$num1` is being divided by. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$rounding_mode`** — The result rounding is defined by the `$rounding_mode`, which can have the following values: - `GMP_ROUND_ZERO`: The result is truncated towards 0. - `GMP_ROUND_PLUSINF`: The result is rounded towards `+infinity`. - `GMP_ROUND_MINUSINF`: The result is rounded towards `-infinity`. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_div_q()` example**

```php


<?php
$div1 = gmp_div_q("100", "5");
echo gmp_strval($div1) . "\n";

$div2 = gmp_div_q("1", "3");
echo gmp_strval($div2) . "\n";

$div3 = gmp_div_q("1", "3", GMP_ROUND_PLUSINF);
echo gmp_strval($div3) . "\n";

$div4 = gmp_div_q("-1", "4", GMP_ROUND_PLUSINF);
echo gmp_strval($div4) . "\n";

$div5 = gmp_div_q("-1", "4", GMP_ROUND_MINUSINF);
echo gmp_strval($div5) . "\n";
?>

    
```

The above example will output:

```text


20
0
1
0
-1

    
```

## Notes

> This function can also be called as `gmp_div()`.

## See Also

`gmp_div_r()` `gmp_div_qr()`
