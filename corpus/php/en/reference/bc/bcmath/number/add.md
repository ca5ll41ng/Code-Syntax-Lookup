---
id: "en-php-function-bcmath-number-add"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::add"
title: "Adds an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::add(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::add(BcMath\Number|string|int $num, int|null $scale = null)
```

Adds `$this` and `$num`.

## Parameters

- **`$num`** — The value to add.
- **`$scale`** — BcMath\Number::scale explicitly specified for calculation results. If `null`, the BcMath\Number::scale of the calculation result will be set automatically.

## Return Values

Returns the result of addition as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the greater BcMath\Number::scale of the two numbers used for addition is used.

That is, if the BcMath\Number::scales of two values are `2` and `5` respectively, the BcMath\Number::scale of the result will be `5`.

## Errors/Exceptions

This method throws a ValueError in the following cases: `$num` is `string` and not a well-formed BCMath numeric string `$scale` is outside the valid range

## Examples

**`BcMath\Number::add()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->add(new BcMath\Number('2.34567'));
$ret2 = $number->add('-3.456');
$ret3 = $number->add(7);

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
  string(7) "3.57967"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(6) "-2.222"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "8.234"
  ["scale"]=>
  int(3)
}

   
```

**`BcMath\Number::add()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->add(new BcMath\Number('2.34567'), 1);
$ret2 = $number->add('-3.456', 10);
$ret3 = $number->add(7, 0);

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
  string(3) "3.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "-2.2220000000"
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

 `bcadd()` `BcMath\Number::sub()`
