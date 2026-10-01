---
id: "en-php-function-intlchar-hasbinaryproperty"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::hasBinaryProperty"
title: "Check a binary Unicode property for a code point"
signature: "public static bool|null IntlChar::hasBinaryProperty(int|string $codepoint, int $property)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.hasbinaryproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check a binary Unicode property for a code point

## Description

```php
public static bool|null IntlChar::hasBinaryProperty(int|string $codepoint, int $property)
```

Checks a binary Unicode property for a code point.

Unicode, especially in version 3.2, defines many more properties than the original set in UnicodeData.txt.

The properties APIs are intended to reflect Unicode properties as defined in the Unicode Character Database (UCD) and Unicode Technical Reports (UTR). For details about the properties see [](). For names of Unicode properties see the UCD file PropertyAliases.txt.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)
- **`$property`** — The Unicode property to lookup (see the `IntlChar::PROPERTY_{*}` constants).

## Return Values

Returns `true` or `false` according to the binary Unicode property value for `$codepoint`. Also `false` if `$property` is out of bounds or if the Unicode version does not have data for the property at all, or not for this code point. Returns `null` on failure.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::hasBinaryProperty("A", IntlChar::PROPERTY_ALPHABETIC));
var_dump(IntlChar::hasBinaryProperty("A", IntlChar::PROPERTY_CASE_SENSITIVE));
var_dump(IntlChar::hasBinaryProperty("A", IntlChar::PROPERTY_BIDI_MIRRORED));
var_dump(IntlChar::hasBinaryProperty("[", IntlChar::PROPERTY_ALPHABETIC));
var_dump(IntlChar::hasBinaryProperty("[", IntlChar::PROPERTY_CASE_SENSITIVE));
var_dump(IntlChar::hasBinaryProperty("[", IntlChar::PROPERTY_BIDI_MIRRORED));
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(false)
bool(false)
bool(false)
bool(true)

   
```

## See Also

`IntlChar::getIntPropertyValue()` `IntlChar::getUnicodeVersion()`
