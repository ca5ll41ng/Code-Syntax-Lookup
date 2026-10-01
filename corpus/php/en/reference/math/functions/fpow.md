---
id: "en-php-function-function-fpow"
language: "php"
lang: "en"
category: "function"
name: "fpow"
title: "Raise one number to the power of another, according to IEEE 754"
signature: "float fpow(float $num, float $exponent)"
module: "math"
source_url: "https://www.php.net/manual/en/function.fpow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Raise one number to the power of another, according to IEEE 754

## Description

```php
float fpow(float $num, float $exponent)
```

Returns the floating point result of raising `$num` to the power of `$exponent`. If `$num` is zero and `$exponent` is less than zero, then `INF` is returned.

## Parameters

- **`$num`** — The base to use.
- **`$exponent`** — The exponent.

## Return Values

Returns a `float` corresponding to $num$exponent.

## Examples

**`fpow()` example**

```php


<?php
var_dump(fpow(10, 2));
var_dump(fpow(0, -3));
var_dump(fpow(-1, 5.5));
?>

   
```

The above example will output:

```text


float(100)
float(INF)
float(NAN)

   
```

## See Also

  Exponentiation operator `**`  `pow()` `fdiv()` `fmod()`
