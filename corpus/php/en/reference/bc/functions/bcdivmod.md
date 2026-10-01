---
id: "en-php-function-function-bcdivmod"
language: "php"
lang: "en"
category: "function"
name: "bcdivmod"
title: "Get the quotient and modulus of an arbitrary precision number"
signature: "array bcdivmod(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/en/function.bcdivmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the quotient and modulus of an arbitrary precision number

## Description

```php
array bcdivmod(string $num1, string $num2, int|null $scale = null)
```

Get the quotient and remainder of dividing `$num1` by `$num2`.

## parameters



## Return Values

Returns an indexed `array` where the first element is the quotient as a `string` and the second element is the remainder as a `string`.



## Examples

**`bcdivmod()` example**

```php


<?php
bcscale(0);

[$quot, $rem] = bcdivmod('5',  '3');
echo $quot; // 1
echo $rem;  // 2

[$quot, $rem] = bcdivmod('5',  '-3');
echo $quot; // -1
echo $rem;  // 2

[$quot, $rem] = bcdivmod('-5',  '3');
echo $quot; // -1
echo $rem;  // -2

[$quot, $rem] = bcdivmod('-5',  '-3');
echo $quot; // 1
echo $rem;  // -2
?>

   
```

**`bcdivmod()` with decimals**

```php


<?php
[$quot, $rem] = bcdivmod('5.7', '1.3', 1);
echo $quot; // 4
echo $rem;  // 0.5
?>

   
```

## See Also

 `bcdiv()` `bcmod()` `BcMath\Number::divmod()`
