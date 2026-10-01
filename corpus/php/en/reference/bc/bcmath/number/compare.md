---
id: "en-php-function-bcmath-number-compare"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::compare"
title: "Compares two arbitrary precision numbers"
signature: "public int BcMath\\Number::compare(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares two arbitrary precision numbers

## Description

```php
public int BcMath\Number::compare(BcMath\Number|string|int $num, int|null $scale = null)
```

Compare two arbitrary precision numbers. This method behaves similar to the spaceship operator.

## Parameters

- **`$num`** — The value to be compared to.
- **`$scale`** — Specify the `$scale` to use for comparison. If `null`, all digits are used in the comparison.

## Return Values

Returns `0` if the two numbers are equal, `1` if `$this` is greater than `$num`, `-1` otherwise.

 error 



## Examples

**`BcMath\Number::compare()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('1.234');

var_dump(
    $number->compare(new BcMath\Number('1.234')),
    $number->compare('1.23400'),
    $number->compare('1.23401'),
    $number->compare(1),
);
?>

   
```

The above example will output:

```text


int(0)
int(0)
int(-1)
int(1)

   
```

**`BcMath\Number::compare()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('1.234');

var_dump(
    $number->compare(new BcMath\Number('1.299'), 1),
    $number->compare('1.24', 2),
    $number->compare('1.22', 2),
    $number->compare(1, 0),
);
?>

   
```

The above example will output:

```text


int(0)
int(-1)
int(1)
int(0)

   
```

## See Also

 `bccomp()`
