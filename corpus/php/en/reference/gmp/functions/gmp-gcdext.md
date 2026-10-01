---
id: "en-php-function-function-gmp-gcdext"
language: "php"
lang: "en"
category: "function"
name: "gmp_gcdext"
title: "Calculate GCD and multipliers"
signature: "array gmp_gcdext(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-gcdext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate GCD and multipliers

## Description

```php
array gmp_gcdext(GMP|int|string $num1, GMP|int|string $num2)
```

Calculates g, s, and t, such that `a*s + b*t = g = gcd(a,b)`, where gcd is the greatest common divisor. Returns an array with respective elements g, s and t.

This function can be used to solve linear Diophantine equations in two variables. These are equations that allow only integer solutions and have the form: `a*x + b*y = c`. For more information, go to the ["Diophantine Equation" page at MathWorld]()

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

An `array` of GMP numbers.

## Examples

**Solving a linear Diophantine equation**

```php


<?php
// Solve the equation a*s + b*t = g
// where a = 12, b = 21, g = gcd(12, 21) = 3
$a = gmp_init(12);
$b = gmp_init(21);
$g = gmp_gcd($a, $b);
$r = gmp_gcdext($a, $b);

$check_gcd = (gmp_strval($g) == gmp_strval($r['g']));
$eq_res = gmp_add(gmp_mul($a, $r['s']), gmp_mul($b, $r['t']));
$check_res = (gmp_strval($g) == gmp_strval($eq_res));

if ($check_gcd && $check_res) {
    $fmt = "Solution: %d*%d + %d*%d = %d\n";
    printf($fmt, gmp_strval($a), gmp_strval($r['s']), gmp_strval($b),
    gmp_strval($r['t']), gmp_strval($r['g']));
} else {
    echo "Error while solving the equation\n";
}

// output: Solution: 12*2 + 21*-1 = 3
?>

    
```
