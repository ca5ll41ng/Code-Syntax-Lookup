---
id: "en-php-function-intlchar-fordigit"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::forDigit"
title: "Get character representation for a given digit and radix"
signature: "public static int IntlChar::forDigit(int $digit, int $base = 10)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.fordigit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get character representation for a given digit and radix

## Description

```php
public static int IntlChar::forDigit(int $digit, int $base = 10)
```

Determines the character representation for a specific digit in the specified radix.

If the value of radix is not a valid radix, or the value of digit is not a valid digit in the specified radix, the null character (`U+0000`) is returned.

The radix argument is valid if it is greater than or equal to `2` and less than or equal to `36`. The digit argument is valid if `0 <= digit < radix`.

If the digit is less than `10`, then '0' + digit is returned. Otherwise, the value 'a' + digit - 10 is returned.

## Parameters

- **`$digit`** — The number to convert to a character.
- **`$base`** — The radix (defaults to `10`).

## Return Values

The character representation (as a `int`) of the specified digit in the specified radix.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::forDigit(0));
var_dump(IntlChar::forDigit(3));
var_dump(IntlChar::forDigit(3, 10));
var_dump(IntlChar::forDigit(10));
var_dump(IntlChar::forDigit(10, 16));
?>

   
```

The above example will output:

```text

    
int(48)
int(51)
int(51)
int(0)
int(97)

   
```

## See Also

`IntlChar::digit()` `IntlChar::charDigitValue()` `IntlChar::isdigit()` `IntlChar::PROPERTY_NUMERIC_TYPE`
