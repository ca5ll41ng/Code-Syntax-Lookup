---
id: "en-php-function-intlchar-chardirection"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::charDirection"
title: "Get bidirectional category value for a code point"
signature: "public static int|null IntlChar::charDirection(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.chardirection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get bidirectional category value for a code point

## Description

```php
public static int|null IntlChar::charDirection(int|string $codepoint)
```

Returns the bidirectional category value for the code point, which is used in the [Unicode bidirectional algorithm (UAX #9)]().

> Some unassigned code points have bidi values of R or AL because they are in blocks that are reserved for Right-To-Left scripts.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

The bidirectional category value; one of the following constants: `IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT` `IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT` `IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER` `IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR` `IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_TERMINATOR` `IntlChar::CHAR_DIRECTION_ARABIC_NUMBER` `IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR` `IntlChar::CHAR_DIRECTION_BLOCK_SEPARATOR` `IntlChar::CHAR_DIRECTION_SEGMENT_SEPARATOR` `IntlChar::CHAR_DIRECTION_WHITE_SPACE_NEUTRAL` `IntlChar::CHAR_DIRECTION_OTHER_NEUTRAL` `IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_EMBEDDING` `IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_OVERRIDE` `IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ARABIC` `IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_EMBEDDING` `IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_OVERRIDE` `IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_FORMAT` `IntlChar::CHAR_DIRECTION_DIR_NON_SPACING_MARK` `IntlChar::CHAR_DIRECTION_BOUNDARY_NEUTRAL` `IntlChar::CHAR_DIRECTION_FIRST_STRONG_ISOLATE` `IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_ISOLATE` `IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ISOLATE` `IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_ISOLATE` `IntlChar::CHAR_DIRECTION_CHAR_DIRECTION_COUNT` Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::charDirection("A") === IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT);
var_dump(IntlChar::charDirection("\u{05E9}") === IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT);
var_dump(IntlChar::charDirection("+") === IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR);
var_dump(IntlChar::charDirection(".") === IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR);
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(true)
bool(true)

   
```
