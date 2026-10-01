---
id: "en-php-function-bcmath-number-mul"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::mul"
title: "Multiplies an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::mul(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.mul.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Multiplies an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::mul(BcMath\Number|string|int $num, int|null $scale = null)
```

Multiplies `$this` by `$num`.

## Parameters

- **`$num`** — The multiplier.

## Return Values

Returns the result of multiplication as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the sum of the BcMath\Number::scales of the two values used for multiplication is used.

That is, if the BcMath\Number::scales of two values are `2` and `5` respectively, the BcMath\Number::scale of the result will be `7`.

## Errors/Exceptions

 ValueError cases 



## Examples

**`BcMath\Number::mul()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->mul(new BcMath\Number('2.3456'));
$ret2 = $number->mul('-3.4');
$ret3 = $number->mul(7);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(5) "1.234"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(9) "2.8944704"
  ["scale"]=>
  int(7)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(7) "-4.1956"
  ["scale"]=>
  int(4)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "8.638"
  ["scale"]=>
  int(3)
}

   
```

**`BcMath\Number::mul()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->mul(new BcMath\Number('2.3456'), 1);
$ret2 = $number->mul('-3.4', 10);
$ret3 = $number->mul(7, 0);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(5) "1.234"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "2.8"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "-4.1956000000"
  ["scale"]=>
  int(10)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "8"
  ["scale"]=>
  int(0)
}

   
```

## See Also

 `bcmul()` `BcMath\Number::div()` `BcMath\Number::pow()` `BcMath\Number::powmod()`
