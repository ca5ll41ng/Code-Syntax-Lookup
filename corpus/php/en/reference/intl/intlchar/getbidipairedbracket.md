---
id: "en-php-function-intlchar-getbidipairedbracket"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getBidiPairedBracket"
title: "Get the paired bracket character for a code point"
signature: "public static int|string|null IntlChar::getBidiPairedBracket(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getbidipairedbracket.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the paired bracket character for a code point

## Description

```php
public static int|string|null IntlChar::getBidiPairedBracket(int|string $codepoint)
```

Maps the specified character to its paired bracket character.

For IntlChar::PROPERTY_BIDI_PAIRED_BRACKET_TYPE !== IntlChar::BPT_NONE, this is the same as `IntlChar::charMirror()`. Otherwise `$codepoint` itself is returned.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns the paired bracket code point, or `$codepoint` itself if there is no such mapping. Returns `null` on failure.

The return type is `int` unless the code point was passed as a UTF-8 `string`, in which case a `string` is returned. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::getBidiPairedBracket(91));
var_dump(IntlChar::getBidiPairedBracket('['));
?>

   
```

The above example will output:

```text

    
int(93)
string(1) "]"

   
```

## Notes

> This method is available as of ICU version 52.

## See Also

`IntlChar::charMirror()` `IntlChar::PROPERTY_BIDI_PAIRED_BRACKET` `IntlChar::PROPERTY_BIDI_PAIRED_BRACKET_TYPE`
