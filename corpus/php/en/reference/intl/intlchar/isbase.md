---
id: "en-php-function-intlchar-isbase"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isbase"
title: "Check if code point is a base character"
signature: "public static bool|null IntlChar::isbase(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isbase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a base character

## Description

```php
public static bool|null IntlChar::isbase(int|string $codepoint)
```

Determines whether the specified code point is a base character. `true` for general categories "L" (letters), "N" (numbers), "Mc" (spacing combining marks), and "Me" (enclosing marks).

> This is different from the Unicode definition in chapter 3.5, conformance clause D13, which defines base characters to be all characters (not Cn) that do not graphically combine with preceding characters (M) and that are neither control (Cc) or format (Cf) characters.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a base character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isbase("A"));
var_dump(IntlChar::isbase("1"));
var_dump(IntlChar::isbase("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::isalpha()` `IntlChar::isdigit()`
