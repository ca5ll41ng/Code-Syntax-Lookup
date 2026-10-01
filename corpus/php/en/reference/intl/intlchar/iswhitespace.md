---
id: "en-php-function-intlchar-iswhitespace"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isWhitespace"
title: "Check if code point is a whitespace character according to ICU"
signature: "public static bool|null IntlChar::isWhitespace(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.iswhitespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a whitespace character according to ICU

## Description

```php
public static bool|null IntlChar::isWhitespace(int|string $codepoint)
```

Determines if the specified code point is a whitespace character according to ICU.

A character is considered to be a ICU whitespace character if and only if it satisfies one of the following criteria: It is a Unicode Separator character (categories "Z" = "Zs" or "Zl" or "Zp"), but is not also a non-breaking space (U+00A0 NBSP or U+2007 Figure Space or U+202F Narrow NBSP). It is U+0009 HORIZONTAL TABULATION. It is U+000A LINE FEED. It is U+000B VERTICAL TABULATION. It is U+000C FORM FEED. It is U+000D CARRIAGE RETURN. It is U+001C FILE SEPARATOR. It is U+001D GROUP SEPARATOR. It is U+001E RECORD SEPARATOR. It is U+001F UNIT SEPARATOR.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a whitespace character according to ICU, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::iswhitespace("A"));
var_dump(IntlChar::iswhitespace(" "));
var_dump(IntlChar::iswhitespace("\n"));
var_dump(IntlChar::iswhitespace("\t"));
var_dump(IntlChar::iswhitespace("\u{00A0}"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(true)
bool(true)
bool(false)

   
```

## See Also

`IntlChar::isspace()` `IntlChar::isJavaSpaceChar()` `IntlChar::isUWhiteSpace()`
