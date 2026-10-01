---
id: "en-php-function-bcmath-number-sqrt"
language: "php"
lang: "en"
category: "function"
name: "BcMath\\Number::sqrt"
title: "Gets the square root of an arbitrary precision number"
signature: "public BcMath\\Number BcMath\\Number::sqrt(int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/bcmath-number.sqrt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the square root of an arbitrary precision number

## Description

```php
public BcMath\Number BcMath\Number::sqrt(int|null $scale = null)
```

Return the square root of `$this`.

## Parameters


## Return Values

Returns the square root as a new `BcMath\Number` object.

When the BcMath\Number::scale of the result object is automatically set, the BcMath\Number::scale of `$this` is used. However, in cases such as indivisible division, the BcMath\Number::scale of the result is expanded. Expansion is done only as needed, up to a maximum of `+10`. This behavior is the same as `BcMath\Number::div()`, so please see that for details.

That is, if the BcMath\Number::scale of `$this` is `5`, the BcMath\Number::scale of the result is between `5` and `15`.

## Errors/Exceptions

This method throws a ValueError in the following cases: `$this` is a negative value `$scale` is outside the valid range BcMath\Number::scale of the result object is outside the valid range

## Examples

**`BcMath\Number::sqrt()` example**

```php


<?php
var_dump(
    new BcMath\Number('2')->sqrt(),
    new BcMath\Number('2')->sqrt(3),
    new BcMath\Number('4')->sqrt(),
    new BcMath\Number('4')->sqrt(3),
);
?>

   
```

The above example will output:

```text


object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(12) "1.4142135623"
  ["scale"]=>
  int(10)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(5) "1.414"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "2"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(5) "2.000"
  ["scale"]=>
  int(3)
}

   
```

## See Also

 `bcsqrt()` `BcMath\Number::div()` `BcMath\Number::pow()`
