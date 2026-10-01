---
id: "en-php-function-function-bcfloor"
language: "php"
lang: "en"
category: "function"
name: "bcfloor"
title: "Round down arbitrary precision number"
signature: "string bcfloor(string $num)"
module: "bc"
source_url: "https://www.php.net/manual/en/function.bcfloor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Round down arbitrary precision number

## Description

```php
string bcfloor(string $num)
```

Returns the next lowest integer value by rounding down `$num` if necessary.

## parameters



## Return Values

Returns a numeric string representing `$num` rounded down to the nearest integer.



## Examples

**`bcfloor()` example**

```php


<?php
var_dump(bcfloor('4.3'));
var_dump(bcfloor('9.999'));
var_dump(bcfloor('-3.14'));
?>

   
```

The above example will output:

```php


string(1) "4"
string(1) "9"
string(2) "-4"

   
```

## See Also

 `bcceil()` `bcround()` `BcMath\Number::floor()`
