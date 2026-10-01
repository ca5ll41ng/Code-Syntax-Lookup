---
id: "en-php-function-bcmath-number-construct"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::__construct"
title: "Creates a BcMath\\Number object"
signature: "public BcMath\\Number::__construct(string|int $num)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a BcMath\Number object

## Description

```php
public BcMath\Number::__construct(string|int $num)
```

Creates a `BcMath\Number` object from an `int` or `string` value.

## Parameters

- **`$num`** — An `int` or `string` value. If `$num` is a `int`, the BcMath\Number::scale is always set to `0`. If `$num` is a `string`, it must be a valid number, and the BcMath\Number::scale is automatically set by parsing the string.

## Errors/Exceptions

This method throws a ValueError if `$num` is `string` and not a well-formed BCMath numeric string.

## Examples

**`BcMath\Number::__construct()` example**

```php


<?php
$num1 = new BcMath\Number(100);
$num2 = new BcMath\Number('-200');
$num3 = new BcMath\Number('300.00');

var_dump($num1, $num2, $num3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "100"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(4) "-200"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(6) "300.00"
  ["scale"]=>
  int(2)
}

   
```

## See Also

 `BcMath\Number::__serialize()` `BcMath\Number::__unserialize()`
