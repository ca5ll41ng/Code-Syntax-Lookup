---
id: "en-php-function-function-gmp-div-r"
language: "php"
lang: "en"
category: "function"
name: "gmp_div_r"
title: "Remainder of the division of numbers"
signature: "GMP gmp_div_r(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-div-r.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remainder of the division of numbers

## Description

```php
GMP gmp_div_r(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO)
```

Calculates remainder of the integer division of `$num1` by `$num2`. The remainder has the sign of the `$num1` argument, if not zero.

## Parameters

- **`$num1`** — The number being divided. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — The number that `$num1` is being divided by. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$rounding_mode`** — See the `gmp_div_q()` function for description of the `$rounding_mode` argument.

## Return Values

The remainder, as a GMP number.

## Examples

**`gmp_div_r()` example**

```php


<?php
$div = gmp_div_r("105", "20");
echo gmp_strval($div) . "\n";
?>

    
```

The above example will output:

```text


5

    
```

## See Also

`gmp_div_q()` `gmp_div_qr()`
