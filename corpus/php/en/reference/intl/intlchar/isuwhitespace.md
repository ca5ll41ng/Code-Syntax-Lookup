---
id: "en-php-function-intlchar-isuwhitespace"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isUWhiteSpace"
title: "Check if code point has the White_Space Unicode property"
signature: "public static bool|null IntlChar::isUWhiteSpace(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isuwhitespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point has the White_Space Unicode property

## Description

```php
public static bool|null IntlChar::isUWhiteSpace(int|string $codepoint)
```

Check if a code point has the White_Space Unicode property.

This is the same as `IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_WHITE_SPACE)`

> This is different from both `IntlChar::isspace()` and `IntlChar::isWhitespace()`.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` has the White_Space Unicode property, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isUWhiteSpace("A"));
var_dump(IntlChar::isUWhiteSpace(" "));
var_dump(IntlChar::isUWhiteSpace("\n"));
var_dump(IntlChar::isUWhiteSpace("\t"));
var_dump(IntlChar::isUWhiteSpace("\u{00A0}"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(true)
bool(true)
bool(true)

   
```

## See Also

`IntlChar::isspace()` `IntlChar::isWhitespace()` `IntlChar::isJavaSpaceChar()` `IntlChar::hasBinaryProperty()` `IntlChar::PROPERTY_WHITE_SPACE`
