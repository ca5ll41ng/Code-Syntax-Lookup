---
id: "en-php-function-intlchar-isjavaidstart"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isJavaIDStart"
title: "Check if code point is permissible as the first character in a Java identifier"
signature: "public static bool|null IntlChar::isJavaIDStart(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isjavaidstart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is permissible as the first character in a Java identifier

## Description

```php
public static bool|null IntlChar::isJavaIDStart(int|string $codepoint)
```

Determines if the specified character is permissible as the start of a Java identifier.

In addition to `IntlChar::isIDStart()`, `true` for characters with general categories "Sc" (currency symbols) and "Pc" (connecting punctuation).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` may start a Java identifier, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isJavaIDStart("A"));
var_dump(IntlChar::isJavaIDStart("$"));
var_dump(IntlChar::isJavaIDStart("\n"));
var_dump(IntlChar::isJavaIDStart("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::isIDStart()` `IntlChar::isJavaIDPart()` `IntlChar::isalpha()`
