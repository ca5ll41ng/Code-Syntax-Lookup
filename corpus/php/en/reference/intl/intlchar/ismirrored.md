---
id: "en-php-function-intlchar-ismirrored"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isMirrored"
title: "Check if code point has the Bidi_Mirrored property"
signature: "public static bool|null IntlChar::isMirrored(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.ismirrored.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point has the Bidi_Mirrored property

## Description

```php
public static bool|null IntlChar::isMirrored(int|string $codepoint)
```

Determines whether the code point has the Bidi_Mirrored property.

This property is set for characters that are commonly used in Right-To-Left contexts and need to be displayed with a "mirrored" glyph.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` has the Bidi_Mirrored property, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isMirrored("A"));
var_dump(IntlChar::isMirrored("<"));
var_dump(IntlChar::isMirrored("("));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(true)

   
```

## See Also

`IntlChar::charMirror()` `IntlChar::PROPERTY_BIDI_MIRRORED`
