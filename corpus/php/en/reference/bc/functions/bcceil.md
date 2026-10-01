---
id: "en-php-function-function-bcceil"
language: "php"
lang: "en"
category: "function"
name: "bcceil"
title: "Round up arbitrary precision number"
signature: "string bcceil(string $num)"
module: "bc"
source_url: "https://www.php.net/manual/en/function.bcceil.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Round up arbitrary precision number

## Description

```php
string bcceil(string $num)
```

Returns the next highest integer value by rounding up `$num` if necessary.

## Parameters

- **`$num`** — The value to round.

## Return Values

Returns a numeric string representing `$num` rounded up to the nearest integer.

## Errors/Exceptions

This function throws a ValueError if `$num` is not a well-formed BCMath numeric string.

## Examples

**`bcceil()` example**

```php


<?php
var_dump(bcceil('4.3'));
var_dump(bcceil('9.999'));
var_dump(bcceil('-3.14'));
?>

   
```

The above example will output:

```php


string(1) "5"
string(2) "10"
string(2) "-3"

   
```

## See Also

 `bcfloor()` `bcround()` `BcMath\Number::ceil()`
