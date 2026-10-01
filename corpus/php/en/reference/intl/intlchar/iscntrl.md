---
id: "en-php-function-intlchar-iscntrl"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::iscntrl"
title: "Check if code point is a control character"
signature: "public static bool|null IntlChar::iscntrl(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.iscntrl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a control character

## Description

```php
public static bool|null IntlChar::iscntrl(int|string $codepoint)
```

Determines whether the specified code point is a control character.

A control character is one of the following: ISO 8-bit control character (U+0000..U+001f and U+007f..U+009f) `IntlChar::CHAR_CATEGORY_CONTROL_CHAR` (Cc) `IntlChar::CHAR_CATEGORY_FORMAT_CHAR` (Cf) `IntlChar::CHAR_CATEGORY_LINE_SEPARATOR` (Zl) `IntlChar::CHAR_CATEGORY_PARAGRAPH_SEPARATOR` (Zp)

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a control character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::iscntrl("A"));
var_dump(IntlChar::iscntrl(" "));
var_dump(IntlChar::iscntrl("\n"));
var_dump(IntlChar::iscntrl("\u{200e}"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(false)
bool(true)
bool(true)

   
```

## See Also

`IntlChar::isprint()` `IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT` `ctype_cntrl()`
