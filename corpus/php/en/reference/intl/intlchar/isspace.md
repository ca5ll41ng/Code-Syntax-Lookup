---
id: "en-php-function-intlchar-isspace"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isspace"
title: "Check if code point is a space character"
signature: "public static bool|null IntlChar::isspace(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isspace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a space character

## Description

```php
public static bool|null IntlChar::isspace(int|string $codepoint)
```

Determines if the specified character is a space character or not.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a space character, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isspace("A"));
var_dump(IntlChar::isspace(" "));
var_dump(IntlChar::isspace("\n"));
var_dump(IntlChar::isspace("\t"));
var_dump(IntlChar::isspace("\u{00A0}"));
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

`IntlChar::isJavaSpaceChar()` `IntlChar::isWhitespace()` `IntlChar::isUWhiteSpace()` `ctype_space()`
