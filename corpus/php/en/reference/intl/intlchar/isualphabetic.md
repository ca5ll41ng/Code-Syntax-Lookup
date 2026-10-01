---
id: "en-php-function-intlchar-isualphabetic"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::isUAlphabetic"
title: "Check if code point has the Alphabetic Unicode property"
signature: "public static bool|null IntlChar::isUAlphabetic(int|string $codepoint)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.isualphabetic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if code point has the Alphabetic Unicode property

## Description

```php
public static bool|null IntlChar::isUAlphabetic(int|string $codepoint)
```

Check if a code point has the Alphabetic Unicode property.

This is the same as `IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_ALPHABETIC)`

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)

## Return Values

Returns `true` if `$codepoint` has the Alphabetic Unicode property, `false` if not. Returns `null` on failure.

## Examples

**Testing different code points**

```php

    
<?php
var_dump(IntlChar::isUAlphabetic("A"));
var_dump(IntlChar::isUAlphabetic("1"));
var_dump(IntlChar::isUAlphabetic("\u{2603}"));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(false)
bool(false)

   
```

## See Also

`IntlChar::isalpha()` `IntlChar::hasBinaryProperty()` `IntlChar::PROPERTY_ALPHABETIC`
