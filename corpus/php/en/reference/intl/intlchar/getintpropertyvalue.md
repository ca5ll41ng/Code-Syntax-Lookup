---
id: "en-php-function-intlchar-getintpropertyvalue"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getIntPropertyValue"
title: "Get the value for a Unicode property for a code point"
signature: "public static int|null IntlChar::getIntPropertyValue(int|string $codepoint, int $property)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getintpropertyvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the value for a Unicode property for a code point

## Description

```php
public static int|null IntlChar::getIntPropertyValue(int|string $codepoint, int $property)
```

Gets the property value for an enumerated or integer Unicode property for a code point. Also returns binary and mask property values.

## Parameters

- **`$codepoint`** — The `int` codepoint value (e.g. `0x2603` for *U+2603 SNOWMAN*), or the character encoded as a UTF-8 `string` (e.g. `"\u{2603}"`)
- **`$property`** — The Unicode property to lookup (see the `IntlChar::PROPERTY_{*}` constants).

## Return Values

Returns the numeric value that is directly the property value or, for enumerated properties, corresponds to the numeric value of the enumerated constant of the respective property value enumeration type. Returns `null` on failure.

Returns `0` or `1` (for `false`/`true`) for binary Unicode properties.

Returns a bit-mask for mask properties.

Returns `0` if `$property` is out of bounds or if the Unicode version does not have data for the property at all, or not for this code point.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getIntPropertyValue("A", IntlChar::PROPERTY_ALPHABETIC) === 1);
var_dump(IntlChar::getIntPropertyValue("[", IntlChar::PROPERTY_BIDI_MIRRORED) === 1);
var_dump(IntlChar::getIntPropertyValue("Φ", IntlChar::PROPERTY_BLOCK) === IntlChar::BLOCK_CODE_GREEK);
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(true)

   
```

## See Also

`IntlChar::hasBinaryProperty()` `IntlChar::getIntPropertyMinValue()` `IntlChar::getIntPropertyMaxValue()` `IntlChar::getUnicodeVersion()`
