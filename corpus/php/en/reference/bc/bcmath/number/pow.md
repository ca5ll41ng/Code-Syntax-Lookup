---
id: "en-php-function-bcmath-number-pow"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::pow"
title: "Raises an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::pow(BcMath\\Number|string|int $exponent, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.pow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Raises an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::pow(BcMath\Number|string|int $exponent, int|null $scale = null)
```

Raises `$this` to the `$exponent` power.

## Parameters

- **`$exponent`** — The exponent. Must be a value with no fractional part. The valid range of the `$exponent` is platform specific, but it is at least `-2147483648` to `2147483647`.

## Return Values

Returns the result of power as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, depending on the value of `$exponent`, the BcMath\Number::scale of result will be as follows:

| `$exponent` | BcMath\Number::scale of result |
| --- | --- |
| positive | (BcMath\Number::scale of power base) * (`$exponent`'s value) |
| `0` | `0` |
| negative | Between (BcMath\Number::scale of power base) and (BcMath\Number::scale  of power base + `10`) |

If an indivisible division occurs due to a negative `$exponent`, the BcMath\Number::scale of the result is expanded. Expansion is done only as needed, up to a maximum of `+10`. This behavior is the same as `BcMath\Number::div()`, so please see that for details.

## Errors/Exceptions

This method throws a ValueError in the following cases: `$exponent` is `string` and not a well-formed BCMath numeric string `$exponent` has a fractional part `$exponent` or `$scale` is outside the valid range BcMath\Number::scale of the result object is outside the valid range

This method throws a DivisionByZeroError exception if `$this`'s value is `0` and `$exponent` is a negative value.

## Examples

**`BcMath\Number::pow()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('3.0');

$ret1 = $number->pow(new BcMath\Number('5'));
$ret2 = $number->pow('-1');
$ret3 = $number->pow(0);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "3.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(9) "243.00000"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "0.33333333333"
  ["scale"]=>
  int(11)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}

   
```

**`BcMath\Number::pow()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('3.0');

$ret1 = $number->pow(new BcMath\Number('5'), 0);
$ret2 = $number->pow('-1', 2);
$ret3 = $number->pow(0, 10);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "3.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "243"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(4) "0.33"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(12) "1.0000000000"
  ["scale"]=>
  int(10)
}

   
```

## See Also

 `bcpow()` `BcMath\Number::powmod()` `BcMath\Number::mul()` `BcMath\Number::sqrt()` `BcMath\Number::div()`
