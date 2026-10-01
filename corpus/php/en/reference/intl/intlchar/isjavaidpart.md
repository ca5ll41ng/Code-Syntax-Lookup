---
id: "en-php-function-intlchar-isjavaidpart"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isJavaIDPart"
title: "Check if code point is permissible in a Java identifier"
signature: "public static bool|null IntlChar::isJavaIDPart(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isjavaidpart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point is permissible in a Java identifier

## Description

```php
public static bool|null IntlChar::isJavaIDPart(int|string $codepoint)
```

Determines if the specified character is permissible in a Java identifier.

In addition to `IntlChar::isIDPart()`, `true` for characters with general category "Sc" (currency symbols).

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` may occur in a Java identifier, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isJavaIDPart("A"));
var_dump(IntlChar::isJavaIDPart("$"));
var_dump(IntlChar::isJavaIDPart("\n"));
var_dump(IntlChar::isJavaIDPart("\u{2603}"));
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

`IntlChar::isIDIgnorable()` `IntlChar::isIDPart()` `IntlChar::isJavaIDStart()` `IntlChar::isalpha()` `IntlChar::isdigit()`
