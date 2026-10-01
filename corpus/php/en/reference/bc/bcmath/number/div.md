---
id: "en-php-function-bcmath-number-div"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::div"
title: "Divides by an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::div(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.div.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Divides by an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::div(BcMath\Number|string|int $num, int|null $scale = null)
```

Divides `$this` by `$num`.

## Parameters

- **`$num`** — The divisor.

## Return Values

Returns the result of division as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the BcMath\Number::scale of the dividend is used. However, in cases such as indivisible division, the BcMath\Number::scale of the result is expanded. Expansion is done only as needed, up to a maximum of `+10`.

That is, if the BcMath\Number::scale of the dividend is `5`, the BcMath\Number::scale of the result is between `5` and `15`.

Even in indivisible calculations, the BcMath\Number::scale will not always be `+10`. A `0` at the end of the result is considered not to need expansion, so the BcMath\Number::scale is reduced by that amount. The BcMath\Number::scale will never be less than the BcMath\Number::scale before expansion. See also the code example.

## Errors/Exceptions

This method throws a ValueError in the following cases: `$num` is `string` and not a well-formed BCMath numeric string `$scale` is outside the valid range BcMath\Number::scale of the result object is outside the valid range

This method throws a DivisionByZeroError exception if `$num` is `0`.

## Examples

**`BcMath\Number::div()` example when `$scale` is not specified**

```php


<?php
$number = new BcMath\Number('0.002');

$ret1 = $number->div(new BcMath\Number('2.000'));
$ret2 = $number->div('-3');
$ret3 = $number->div(32);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(5) "0.002"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(5) "0.001"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(16) "-0.0006666666666"
  ["scale"]=>
  int(13)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(9) "0.0000625"
  ["scale"]=>
  int(7)
}

   
```

**`BcMath\Number::div()` example of explicitly specifying `$scale`**

```php


<?php
$number = new BcMath\Number('0.002');

$ret1 = $number->div(new BcMath\Number('2.000'), 15);
$ret2 = $number->div('-3', 5);
$ret3 = $number->div(32, 2);

var_dump($number, $ret1, $ret2, $ret3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(5) "0.002"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(17) "0.001000000000000"
  ["scale"]=>
  int(15)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(8) "-0.00066"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(4) "0.00"
  ["scale"]=>
  int(2)
}

   
```

**`BcMath\Number::div()` example of expansioning BcMath\Number::scale of result object**

```php


<?php
var_dump(
    new BcMath\Number('0.001')->div('10001'),
    new BcMath\Number('0.001')->div('10001', 13),
    new BcMath\Number('0.001')->div('100000000000001'),
);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "0.00000009999"
  ["scale"]=>
  int(11)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(15) "0.0000000999900"
  ["scale"]=>
  int(13)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "0.000"
  ["scale"]=>
  int(3)
}

   
```

## See Also

 `bcdiv()` `BcMath\Number::divmod()` `BcMath\Number::mod()` `BcMath\Number::sqrt()` `BcMath\Number::pow()` `BcMath\Number::mul()`
