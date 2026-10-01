---
id: "en-php-function-bcmath-number-sub"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::sub"
title: "Subtracts an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::sub(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.sub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Subtracts an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::sub(BcMath\Number|string|int $num, int|null $scale = null)
```

Subtracts `$num` from `$this`.

## Parameters

- **`$num`** — The value to subtract.

## Return Values

Returns the result of subtraction as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the greater BcMath\Number::scale of the two numbers used for subtraction is used.

 Auto scale example 



 error 



## Examples

**`BcMath\Number::sub()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->sub(new BcMath\Number('2.34567'));
$ret2 = $number->sub('-3.456');
$ret3 = $number->sub(7);

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
  string(8) "-1.11167"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(5) "4.690"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(6) "-5.766"
  ["scale"]=>
  int(3)
}

   
```

**`BcMath\Number::sub()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->sub(new BcMath\Number('2.34567'), 1);
$ret2 = $number->sub('-3.456', 10);
$ret3 = $number->sub(7, 0);

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
  string(4) "-1.1"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(12) "4.6900000000"
  ["scale"]=>
  int(10)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-5"
  ["scale"]=>
  int(0)
}

   
```

## See Also

 `bcsub()` `BcMath\Number::add()`
