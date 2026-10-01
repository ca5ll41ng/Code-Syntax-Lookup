---
id: "en-php-function-bcmath-number-powmod"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::powmod"
title: "Raises an arbitrary precision number, reduced by a specified modulus"
signature: "public BcMath\\Number BcMath\\Number::powmod(BcMath\\Number|string|int $exponent, BcMath\\Number|string|int $modulus, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.powmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Raises an arbitrary precision number, reduced by a specified modulus

## Description

```php
public BcMath\Number BcMath\Number::powmod(BcMath\Number|string|int $exponent, BcMath\Number|string|int $modulus, int|null $scale = null)
```

Use the fast-exponentiation method to raise `$this` to the power `$exponent` with respect to the modulus `$modulus`.

## Parameters

- **`$exponent`** — The exponent, as an non-negative and integral (i.e. the scale has to be zero).
- **`$modulus`** — The modulus, as an integral (i.e. the scale has to be zero).

## Return Values

Returns the result as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the BcMath\Number::scale of the result object will always be `0`.

## Errors/Exceptions

This method throws a ValueError in the following cases: `$exponent` or `$modulus` is `string` and not a well-formed BCMath numeric string `$this`, `$exponent` or `$modulus` has a fractional part `$exponent` is a negative value `$scale` is outside the valid range

This method throws a DivisionByZeroError exception if `$modulus` is `0`.

## Examples

**`BcMath\Number::powmod()` example when `$scale` is not specified**

```php


<?php
var_dump(
    new BcMath\Number('8')->powmod(new BcMath\Number('3'), 5),
    new BcMath\Number('-8')->powmod(new BcMath\Number('3'), 5),
    new BcMath\Number('8')->powmod('2', -3),
    new BcMath\Number('-8')->powmod(5, 7),
);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "2"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-2"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(2) "-1"
  ["scale"]=>
  int(0)
}

   
```

**`BcMath\Number::powmod()` example of explicitly specifying `$scale`**

```php


<?php
var_dump(
    new BcMath\Number('8')->powmod(new BcMath\Number('3'), 5, 1),
    new BcMath\Number('-8')->powmod(new BcMath\Number('3'), 5, 2),
    new BcMath\Number('8')->powmod('2', -3, 3),
    new BcMath\Number('-8')->powmod(5, 7, 4),
);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "2.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "-2.00"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(5) "1.000"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(7) "-1.0000"
  ["scale"]=>
  int(4)
}

   
```

## See Also

 `bcpowmod()` `BcMath\Number::pow()` `BcMath\Number::mod()`
