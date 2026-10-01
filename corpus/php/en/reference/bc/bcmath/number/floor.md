---
id: "en-php-function-bcmath-number-floor"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::floor"
title: "Rounds down an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::floor()"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.floor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rounds down an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::floor()
```

Returns the next highest integer value by rounding down `$this` if necessary.

## Parameters

This function has no parameters.

 returnvalues 



## Examples

**`BcMath\Number::floor()` example**

```php


<?php
$num1 = new BcMath\Number('4.3')->floor();
$num2 = new BcMath\Number('9.999')->floor();
$num3 = new BcMath\Number('-3.14')->floor();

var_dump($num1, $num2, $num3);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "4"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-4"
  ["scale"]=>
  int(0)
}

   
```

## See Also

 `bcfloor()` `BcMath\Number::ceil()` `BcMath\Number::round()`
