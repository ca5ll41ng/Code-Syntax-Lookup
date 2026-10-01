---
id: "en-php-function-intlchar-isdigit"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isdigit"
title: "Check if code point is a digit character"
signature: "public static bool|null IntlChar::isdigit(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isdigit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a digit character

## Description

```php
public static bool|null IntlChar::isdigit(int|string $codepoint)
```

Determines whether the specified code point is a digit character.

`true` for characters with general category "Nd" (decimal digit numbers). Beginning with Unicode 4, this is the same as testing for the Numeric_Type of Decimal.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a digit character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isdigit("A"));
var_dump(IntlChar::isdigit("1"));
var_dump(IntlChar::isdigit("\t"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::isalpha()` `IntlChar::isalnum()` `IntlChar::isxdigit()` `ctype_digit()`
