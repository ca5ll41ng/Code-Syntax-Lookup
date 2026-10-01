---
id: "en-php-function-intlchar-getpropertyvaluename"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getPropertyValueName"
title: "Get the Unicode name for a property value"
signature: "public static string|false IntlChar::getPropertyValueName(int $property, int $value, int $type = IntlChar::LONG_PROPERTY_NAME)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getpropertyvaluename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the Unicode name for a property value

## Description

```php
public static string|false IntlChar::getPropertyValueName(int $property, int $value, int $type = IntlChar::LONG_PROPERTY_NAME)
```

Returns the Unicode name for a given property value, as given in the Unicode database file PropertyValueAliases.txt.

> Some of the names in PropertyValueAliases.txt can only be retrieved using `IntlChar::PROPERTY_GENERAL_CATEGORY_MASK`, not `IntlChar::PROPERTY_GENERAL_CATEGORY`. These include: "C" / "Other" "L" / "Letter" "LC" / "Cased_Letter" "M" / "Mark" "N" / "Number" "P" / "Punctuation" "S" / "Symbol" "Z" / "Separator"

## Parameters

- **`$property`** — The Unicode property to lookup (see the `IntlChar::PROPERTY_{*}` constants). — If out of range, or this method doesn't work with the given value, `false` is returned.
- **`$value`** — Selector for a value for the given property. If out of range, `false` is returned. — In general, valid values range from `0` up to some maximum. There are a couple exceptions: `IntlChar::PROPERTY_BLOCK` values begin at the non-zero value `IntlChar::BLOCK_CODE_BASIC_LATIN` `IntlChar::PROPERTY_CANONICAL_COMBINING_CLASS` values are not contiguous and range from 0..240.
- **`$type`** — Selector for which name to get. If out of range, `false` is returned. — All values have a long name. Most have a short name, but some do not. Unicode allows for additional names; if present these will be returned by adding 1, 2, etc. to `IntlChar::LONG_PROPERTY_NAME`.

## Return Values

Returns the name, or `false` if either the `$property` or the `$type` is out of range. Returns `null` on failure.

If a given `$type` returns `false`, then all larger values of `$type` will return `false`, with one exception: if `false` is returned for `IntlChar::SHORT_PROPERTY_NAME`, then `IntlChar::LONG_PROPERTY_NAME` (and higher) may still return a non-`false` value.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK));
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::SHORT_PROPERTY_NAME));
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::LONG_PROPERTY_NAME));
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::LONG_PROPERTY_NAME + 1));
?>

   
```

The above example will output:

```text

    
string(16) "Greek_And_Coptic"
string(5) "Greek"
string(16) "Greek_And_Coptic"
bool(false)

   
```
