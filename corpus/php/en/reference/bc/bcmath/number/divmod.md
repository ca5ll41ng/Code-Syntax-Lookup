---
id: "en-php-function-bcmath-number-divmod"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::divmod"
title: "Gets the quotient and modulus of an arbitrary precision number"
signature: "public array BcMath\\Number::divmod(BcMath\\Number|string|int $num, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.divmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the quotient and modulus of an arbitrary precision number

## Description

```php
public array BcMath\Number::divmod(BcMath\Number|string|int $num, int|null $scale = null)
```

Gets the quotient and remainder of dividing `$this` by `$num`.

 parameters 



## Return Values

Returns an indexed `array` where the first element is the quotient as a new `BcMath\Number` object and the second element is the remainder as a new `BcMath\Number` object.

The quotient is always an integer value, so BcMath\Number::scale of the quotient will always be `0`, regardless of whether explicitly specify `$scale`.

If `$scale` is explicitly specified, BcMath\Number::scale of the remainder will be the specified value. When the BcMath\Number::scale of the result's remainder object is automatically set, the greater BcMath\Number::scale of the two numbers used for modulus operation is used.

That is, if the BcMath\Number::scales of two values are `2` and `5` respectively, the BcMath\Number::scale of the remainder will be `5`.

## Errors/Exceptions

 ValueError cases 



 The DivisionByZeroError case 



## Examples

**`BcMath\Number::divmod()` example when `$scale` is not specified**

```php


<?php
echo '8.3 / 2.22' . PHP_EOL;
[$quot, $rem] = new BcMath\Number('8')->divmod(new BcMath\Number('2.22'));
var_dump($quot, $rem);

echo PHP_EOL . '8.3 / 8.3' . PHP_EOL;
[$quot, $rem] = new BcMath\Number('8.3')->divmod('8.3');
var_dump($quot, $rem);

echo PHP_EOL . '10 / -3' . PHP_EOL;
[$quot, $rem] = new BcMath\Number('10')->divmod(-3);
var_dump($quot, $rem);
?>

   
```

The above example will output:

```text


8.3 / 2.22
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "3"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(4) "1.34"
  ["scale"]=>
  int(2)
}

8.3 / 8.3
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(3) "0.0"
  ["scale"]=>
  int(1)
}

10 / -3
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(2) "-3"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}

   
```

**`BcMath\Number::divmod()` example of explicitly specifying `$scale`**

```php


<?php
echo '8.3 / 2.22' . PHP_EOL;
[$quot, $rem] = new BcMath\Number('8')->divmod(new BcMath\Number('2.22'), 1);
var_dump($quot, $rem);

echo PHP_EOL . '8.3 / 8.3' . PHP_EOL;
[$quot, $rem] = new BcMath\Number('8.3')->divmod('8.3', 4);
var_dump($quot, $rem);

echo PHP_EOL . '10 / -3' . PHP_EOL;
[$quot, $rem] = new BcMath\Number('10')->divmod(-3, 5);
var_dump($quot, $rem);
?>

   
```

The above example will output:

```text


8.3 / 2.22
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "3"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.3"
  ["scale"]=>
  int(1)
}

8.3 / 8.3
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(6) "0.0000"
  ["scale"]=>
  int(4)
}

10 / -3
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(2) "-3"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(7) "1.00000"
  ["scale"]=>
  int(5)
}

   
```

## See Also

 `bcdivmod()` `BcMath\Number::div()` `BcMath\Number::mod()`
