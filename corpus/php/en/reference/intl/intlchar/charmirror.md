---
id: "en-php-function-intlchar-charmirror"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::charMirror"
title: "Get the \"mirror-image\" character for a code point"
signature: "public static int|string|null IntlChar::charMirror(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.charmirror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the "mirror-image" character for a code point

## Description

```php
public static int|string|null IntlChar::charMirror(int|string $codepoint)
```

Maps the specified character to a "mirror-image" character.

For characters with the *Bidi_Mirrored* property, implementations sometimes need a "poor man's" mapping to another Unicode character (code point) such that the default glyph may serve as the mirror-image of the default glyph of the specified character. This is useful for text conversion to and from codepages with visual order, and for displays without glyph selection capabilities.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns another Unicode code point that may serve as a mirror-image substitute, or `$codepoint` itself if there is no such mapping or `$codepoint` does not have the *Bidi_Mirrored* property.

The return type is `int` unless the code point was passed as a UTF-8 `string`, in which case a `string` is returned. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::charMirror("A"));
var_dump(IntlChar::charMirror("<"));
var_dump(IntlChar::charMirror("("));
?>

   
```

The above example will output:

```text

    
string(1) "A"
string(1) ">"
string(2) ")"

   
```

## See Also

`IntlChar::isMirrored()` `IntlChar::PROPERTY_BIDI_MIRRORED`
