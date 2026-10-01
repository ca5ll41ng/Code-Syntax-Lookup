---
id: "en-php-function-bcmath-number-ceil"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::ceil"
title: "Rounds up an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::ceil()"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.ceil.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rounds up an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::ceil()
```

Returns the next highest integer value by rounding up `$this` if necessary.

## Parameters

This function has no parameters.

## Return Values

Returns the result as a new `BcMath\Number` object. The BcMath\Number::scale of the result is always `0`.

## Examples

**`BcMath\Number::ceil()` example**

```php


<?php
$num1 = new BcMath\Number('4.3')->ceil();
$num2 = new BcMath\Number('9.999')->ceil();
$num3 = new BcMath\Number('-3.14')->ceil();

var_dump($num1, $num2, $num3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "5"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(2) "10"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-3"
  ["scale"]=>
  int(0)
}

   
```

## See Also

 `bcceil()` `BcMath\Number::floor()` `BcMath\Number::round()`
