---
id: "en-php-function-function-gmp-sign"
language: "php"
lang: "en"
category: "function"
name: "gmp_sign"
title: "Sign of number"
signature: "int gmp_sign(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sign of number

## Description

```php
int gmp_sign(GMP|int|string $num)
```

Checks the sign of a number.

## Parameters

- **`$num`** — Either a `GMP` object, or a numeric string provided that it is possible to convert the latter to an `int`.

## Return Values

Returns 1 if `$num` is positive, -1 if `$num` is negative, and 0 if `$num` is zero.

## Examples

**`gmp_sign()` example**

```php


<?php
// positive
echo gmp_sign("500") . "\n";

// negative
echo gmp_sign("-500") . "\n";

// zero
echo gmp_sign("0") . "\n";
?>

    
```

The above example will output:

```text


1
-1
0

    
```

## See Also

`gmp_abs()` `abs()`
