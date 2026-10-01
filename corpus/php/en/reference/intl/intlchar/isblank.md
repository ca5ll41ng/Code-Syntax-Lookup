---
id: "en-php-function-intlchar-isblank"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isblank"
title: "Check if code point is a \"blank\" or \"horizontal space\" character"
signature: "public static bool|null IntlChar::isblank(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isblank.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a "blank" or "horizontal space" character

## Description

```php
public static bool|null IntlChar::isblank(int|string $codepoint)
```

Determines whether the specified code point is a "blank" or "horizontal space", a character that visibly separates words on a line.

The following are equivalent definitions: `true` for Unicode White_Space characters except for "vertical space controls" where "vertical space controls" are the following characters: U+000A (LF) U+000B (VT) U+000C (FF) U+000D (CR) U+0085 (NEL) U+2028 (LS) U+2029 (PS) `true` for U+0009 (TAB) and characters with general category "Zs" (space separators) except Zero Width Space (ZWSP, U+200B).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is either a "blank" or "horizontal space" character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isblank("A"));
var_dump(IntlChar::isblank(" "));
var_dump(IntlChar::isblank("\t"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(true)

   
```

## See Also

`IntlChar::isspace()` `IntlChar::isJavaSpaceChar()` `IntlChar::isUWhiteSpace()` `IntlChar::isWhitespace()`
