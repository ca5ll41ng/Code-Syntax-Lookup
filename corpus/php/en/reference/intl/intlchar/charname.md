---
id: "en-php-function-intlchar-charname"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::charName"
title: "Retrieve the name of a Unicode character"
signature: "public static string|null IntlChar::charName(int|string $codepoint, int $type = IntlChar::UNICODE_CHAR_NAME)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.charname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the name of a Unicode character

## Description

```php
public static string|null IntlChar::charName(int|string $codepoint, int $type = IntlChar::UNICODE_CHAR_NAME)
```

Retrieves the name of a Unicode character.

Depending on `$type`, the resulting character name is the "modern" name or the name that was defined in Unicode version 1.0. The name contains only "invariant" characters like A-Z, 0-9, space, and '-'. Unicode 1.0 names are only retrieved if they are different from the modern names and if ICU contains the data for them.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)
- **`$type`** — Which set of names to use for the lookup. Can be any of these constants: `IntlChar::UNICODE_CHAR_NAME` (default) `IntlChar::UNICODE_10_CHAR_NAME` `IntlChar::EXTENDED_CHAR_NAME` `IntlChar::CHAR_NAME_ALIAS` `IntlChar::CHAR_NAME_CHOICE_COUNT`

## Return Values

The corresponding name, or an empty string if there is no name for this character, or `null` if there is no such code point.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::charName("."));
var_dump(IntlChar::charName(".", IntlChar::UNICODE_CHAR_NAME));
var_dump(IntlChar::charName("\u{2603}"));
var_dump(IntlChar::charName("\u{0000}"));
?>

   
```

The above example will output:

```text

    
string(9) "FULL STOP"
string(9) "FULL STOP"
string(7) "SNOWMAN"
string(0) ""

   
```

## See Also

`IntlChar::charFromName()` `IntlChar::enumCharNames()`
