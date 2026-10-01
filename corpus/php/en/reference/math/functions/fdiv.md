---
id: "en-php-function-function-fdiv"
language: "php"
lang: "en"
category: "function"
name: "fdiv"
title: "Divides two numbers, according to IEEE 754"
signature: "float fdiv(float $num1, float $num2)"
module: "math"
source_url: "https://www.php.net/manual/en/function.fdiv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Divides two numbers, according to IEEE 754

## Description

```php
float fdiv(float $num1, float $num2)
```

Returns the floating point result of dividing the `$num1` by the `$num2`. If the `$num2` is zero, then one of `INF`, -`INF`, or `NAN` will be returned.

Note that in comparisons, `NAN` will never be equal (==) or identical (===) to any value, including itself.

## Parameters

- **`$num1`** — The dividend (numerator)
- **`$num2`** — The divisor

## Return Values

The floating point result of `$num1`/`$num2`

## Examples

**Using `fdiv()`**

```php


<?php
var_dump(fdiv(5.7, 1.3)); // float(4.384615384615385)
var_dump(fdiv(4, 2)); // float(2)
var_dump(fdiv(1.0, 0.0)); // float(INF)
var_dump(fdiv(-1.0, 0.0)); // float(-INF)
var_dump(fdiv(0.0, 0.0)); // float(NAN)
?>

    
```

## See Also

Division operator `/` `intdiv()` - Integer division `fmod()` `fpow()`
