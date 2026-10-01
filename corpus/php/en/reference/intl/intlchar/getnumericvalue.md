---
id: "en-php-function-intlchar-getnumericvalue"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getNumericValue"
title: "Get the numeric value for a Unicode code point"
signature: "public static float|null IntlChar::getNumericValue(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getnumericvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the numeric value for a Unicode code point

## Description

```php
public static float|null IntlChar::getNumericValue(int|string $codepoint)
```

Gets the numeric value for a Unicode code point as defined in the Unicode Character Database.

For characters without any numeric values in the Unicode Character Database, this function will return `IntlChar::NO_NUMERIC_VALUE`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Numeric value of `$codepoint`, or `IntlChar::NO_NUMERIC_VALUE` if none is defined. This constant was added in PHP 7.0.6, prior to this version the literal value (`float`)`-123456789` may be used instead. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::getNumericValue("4"));
var_dump(IntlChar::getNumericValue("x"));
var_dump(IntlChar::getNumericValue("\u{216C}"));
?>

   
```

The above example will output:

```text

    
float(4)
float(-123456789)
float(50)

   
```
