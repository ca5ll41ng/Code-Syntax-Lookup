---
id: "en-php-function-intlchar-chardigitvalue"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::charDigitValue"
title: "Get the decimal digit value of a decimal digit character"
signature: "public static int|null IntlChar::charDigitValue(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.chardigitvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the decimal digit value of a decimal digit character

## Description

```php
public static int|null IntlChar::charDigitValue(int|string $codepoint)
```

Returns the decimal digit value of a decimal digit character.

Such characters have the general category "Nd" (decimal digit numbers) and a Numeric_Type of Decimal.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

The decimal digit value of `$codepoint`, or `-1` if it is not a decimal digit character. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::charDigitValue("1"));
var_dump(IntlChar::charDigitValue("\u{0662}"));
var_dump(IntlChar::charDigitValue("\u{0E53}"));
?>

   
```

The above example will output:

```text

    
int(1)
int(2)
int(3)

   
```

## See Also

`IntlChar::getNumericValue()`
