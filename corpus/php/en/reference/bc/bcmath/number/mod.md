---
id: "en-php-function-bcmath-number-mod"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::mod"
title: "Gets the modulus of an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::mod(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.mod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the modulus of an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::mod(BcMath\Number|string|int $num, int|null $scale = null)
```

Gets the remainder of dividing `$this` by `$num`. Unless `$num` is `0`, the result has the same sign as `$this`.

 parameters 



## Return Values

Returns the modulus as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the greater BcMath\Number::scale of the two numbers used for modulus operation is used.

 Auto scale example 



## Errors/Exceptions

 ValueError cases 



 The DivisionByZeroError case 



## Examples

**`BcMath\Number::mod()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('8.3');

$ret1 = $number->mod(new BcMath\Number('2.22'));
$ret2 = $number->mod('8.3');
$ret3 = $number->mod(-5);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "8.3"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(4) "1.64"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(3) "0.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "3.3"
  ["scale"]=>
  int(1)
}

   
```

**`BcMath\Number::mod()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('8.3');

$ret1 = $number->mod(new BcMath\Number('2.22'), 1);
$ret2 = $number->mod('8.3', 3);
$ret3 = $number->mod(-5, 0);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "8.3"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "1.6"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(5) "0.000"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "3"
  ["scale"]=>
  int(0)
}

   
```

## See Also

 `bcmod()` `BcMath\Number::div()` `BcMath\Number::divmod()` `BcMath\Number::powmod()`
