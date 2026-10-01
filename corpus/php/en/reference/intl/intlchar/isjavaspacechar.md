---
id: "en-php-function-intlchar-isjavaspacechar"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isJavaSpaceChar"
title: "Check if code point is a space character according to Java"
signature: "public static bool|null IntlChar::isJavaSpaceChar(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isjavaspacechar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is a space character according to Java

## Description

```php
public static bool|null IntlChar::isJavaSpaceChar(int|string $codepoint)
```

Determine if the specified code point is a space character according to Java.

`true` for characters with general categories "Z" (separators), which does not include control codes (e.g., TAB or Line Feed).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` is a space character according to Java, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isJavaSpaceChar("A"));
var_dump(IntlChar::isJavaSpaceChar(" "));
var_dump(IntlChar::isJavaSpaceChar("\n"));
var_dump(IntlChar::isJavaSpaceChar("\t"));
var_dump(IntlChar::isJavaSpaceChar("\u{00A0}"));
?>

   
```

The above example will output:

```text

    
bool(false)
bool(true)
bool(false)
bool(false)
bool(true)

   
```

## See Also

`IntlChar::isspace()` `IntlChar::isWhitespace()` `IntlChar::isUWhiteSpace()`
