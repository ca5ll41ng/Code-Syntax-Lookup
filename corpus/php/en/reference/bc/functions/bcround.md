---
id: "en-php-function-function-bcround"
language: "php"
lang: "en"
category: "function"
name: "bcround"
title: "Round arbitrary precision number"
signature: "string bcround(string $num, int $precision = 0, RoundingMode $mode = RoundingMode::HalfAwayFromZero)"
module: "bc"
source_url: "https://www.php.net/manual/en/function.bcround.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Round arbitrary precision number

## Description

```php
string bcround(string $num, int $precision = 0, RoundingMode $mode = RoundingMode::HalfAwayFromZero)
```

Returns the rounded value of `$num` to specified `$precision` (number of digits after the decimal point). `$precision` can also be negative or zero (default).

## Parameters


## Return Values

Returns a numeric string representing `$num` rounded to the given precision.

## Errors/Exceptions

This function throws a ValueError in the following cases: `$num` is not a well-formed BCMath numeric string. An invalid `$mode` is specified.

## Examples

**`bcround()` examples**

```php


<?php
var_dump(bcround('3.4'));
var_dump(bcround('3.5'));
var_dump(bcround('3.6'));
var_dump(bcround('3.6', 0));
var_dump(bcround('5.045', 2));
var_dump(bcround('5.055', 2));
var_dump(bcround('345', -2));
var_dump(bcround('345', -3));
var_dump(bcround('678', -2));
var_dump(bcround('678', -3));
?>

   
```

The above example will output:

```php


string(1) "3"
string(1) "4"
string(1) "4"
string(1) "4"
string(4) "5.05"
string(4) "5.06"
string(3) "300"
string(1) "0"
string(3) "700"
string(4) "1000"

   
```

**Example of using `bcround()` with different `$precision` values**

```php


<?php
$number = '123.45';

var_dump(bcround($number, 3));
var_dump(bcround($number, 2));
var_dump(bcround($number, 1));
var_dump(bcround($number, 0));
var_dump(bcround($number, -1));
var_dump(bcround($number, -2));
var_dump(bcround($number, -3));
?>

   
```

The above example will output:

```php


string(7) "123.450"
string(6) "123.45"
string(5) "123.5"
string(3) "123"
string(3) "120"
string(3) "100"
string(1) "0"

   
```

**Example of using `bcround()` with different `$mode` values**

```php


<?php
echo 'Rounding modes with 9.5' . PHP_EOL;
var_dump(bcround('9.5', 0, RoundingMode::HalfAwayFromZero));
var_dump(bcround('9.5', 0, RoundingMode::HalfTowardsZero));
var_dump(bcround('9.5', 0, RoundingMode::HalfEven));
var_dump(bcround('9.5', 0, RoundingMode::HalfOdd));
var_dump(bcround('9.5', 0, RoundingMode::TowardsZero));
var_dump(bcround('9.5', 0, RoundingMode::AwayFromZero));
var_dump(bcround('9.5', 0, RoundingMode::NegativeInfinity));
var_dump(bcround('9.5', 0, RoundingMode::PositiveInfinity));

echo PHP_EOL;
echo 'Rounding modes with 8.5' . PHP_EOL;
var_dump(bcround('8.5', 0, RoundingMode::HalfAwayFromZero));
var_dump(bcround('8.5', 0, RoundingMode::HalfTowardsZero));
var_dump(bcround('8.5', 0, RoundingMode::HalfEven));
var_dump(bcround('8.5', 0, RoundingMode::HalfOdd));
var_dump(bcround('8.5', 0, RoundingMode::TowardsZero));
var_dump(bcround('8.5', 0, RoundingMode::AwayFromZero));
var_dump(bcround('8.5', 0, RoundingMode::NegativeInfinity));
var_dump(bcround('8.5', 0, RoundingMode::PositiveInfinity));
?>

   
```

The above example will output:

```php


Rounding modes with 9.5
string(2) "10"
string(1) "9"
string(2) "10"
string(1) "9"
string(1) "9"
string(2) "10"
string(1) "9"
string(2) "10"

Rounding modes with 8.5
string(1) "9"
string(1) "8"
string(1) "8"
string(1) "9"
string(1) "8"
string(1) "9"
string(1) "8"
string(1) "9"

   
```

**Example of using `bcround()` with different `$mode` values when specifying `$precision`**

```php


<?php
echo 'Using RoundingMode::HalfAwayFromZero with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::HalfAwayFromZero));
var_dump(bcround(-1.55, 1, RoundingMode::HalfAwayFromZero));

echo PHP_EOL;
echo 'Using RoundingMode::HalfTowardsZero with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::HalfTowardsZero));
var_dump(bcround(-1.55, 1, RoundingMode::HalfTowardsZero));

echo PHP_EOL;
echo 'Using RoundingMode::HalfEven with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::HalfEven));
var_dump(bcround(-1.55, 1, RoundingMode::HalfEven));

echo PHP_EOL;
echo 'Using RoundingMode::HalfOdd with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::HalfOdd));
var_dump(bcround(-1.55, 1, RoundingMode::HalfOdd));

echo PHP_EOL;
echo 'Using RoundingMode::TowardsZero with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::TowardsZero));
var_dump(bcround(-1.55, 1, RoundingMode::TowardsZero));

echo PHP_EOL;
echo 'Using RoundingMode::AwayFromZero with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::AwayFromZero));
var_dump(bcround(-1.55, 1, RoundingMode::AwayFromZero));

echo PHP_EOL;
echo 'Using RoundingMode::NegativeInfinity with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::NegativeInfinity));
var_dump(bcround(-1.55, 1, RoundingMode::NegativeInfinity));

echo PHP_EOL;
echo 'Using RoundingMode::PositiveInfinity with 1 decimal digit precision' . PHP_EOL;
var_dump(bcround( 1.55, 1, RoundingMode::PositiveInfinity));
var_dump(bcround(-1.55, 1, RoundingMode::PositiveInfinity));
?>

   
```

The above example will output:

```php


Using RoundingMode::HalfAwayFromZero with 1 decimal digit precision
string(3) "1.6"
string(4) "-1.6"

Using RoundingMode::HalfTowardsZero with 1 decimal digit precision
string(3) "1.5"
string(4) "-1.5"

Using RoundingMode::HalfEven with 1 decimal digit precision
string(3) "1.6"
string(4) "-1.6"

Using RoundingMode::HalfOdd with 1 decimal digit precision
string(3) "1.5"
string(4) "-1.5"

Using RoundingMode::TowardsZero with 1 decimal digit precision
string(3) "1.5"
string(4) "-1.5"

Using RoundingMode::AwayFromZero with 1 decimal digit precision
string(3) "1.6"
string(4) "-1.6"

Using RoundingMode::NegativeInfinity with 1 decimal digit precision
string(3) "1.5"
string(4) "-1.6"

Using RoundingMode::PositiveInfinity with 1 decimal digit precision
string(3) "1.6"
string(4) "-1.5"

   
```

## See Also

 `bcceil()` `bcfloor()` `BcMath\Number::round()`
