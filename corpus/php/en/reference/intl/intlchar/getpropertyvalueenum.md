---
id: "en-php-function-intlchar-getpropertyvalueenum"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getPropertyValueEnum"
title: "Get the property value for a given value name"
signature: "public static int IntlChar::getPropertyValueEnum(int $property, string $name)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getpropertyvalueenum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the property value for a given value name

## Description

```php
public static int IntlChar::getPropertyValueEnum(int $property, string $name)
```

Returns the property value integer for a given value name, as specified in the Unicode database file PropertyValueAliases.txt. Short, long, and any other variants are recognized.

> Some of the names in PropertyValueAliases.txt will only be recognized with `IntlChar::PROPERTY_GENERAL_CATEGORY_MASK`, not `IntlChar::PROPERTY_GENERAL_CATEGORY`. These include: "C" / "Other" "L" / "Letter" "LC" / "Cased_Letter" "M" / "Mark" "N" / "Number" "P" / "Punctuation" "S" / "Symbol" "Z" / "Separator"

## Parameters

- **`$property`** — The Unicode property to lookup (see the `IntlChar::PROPERTY_{*}` constants). — If out of range, or this method doesn't work with the given value, `IntlChar::PROPERTY_INVALID_CODE` is returned.
- **`$name`** — The value name to be matched. The name is compared using "loose matching" as described in PropertyValueAliases.txt.

## Return Values

Returns the corresponding value integer, or `IntlChar::PROPERTY_INVALID_CODE` if the given name does not match any value of the given property, or if the property is invalid.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getPropertyValueEnum(IntlChar::PROPERTY_BLOCK, 'greek') === IntlChar::BLOCK_CODE_GREEK);
var_dump(IntlChar::getPropertyValueEnum(IntlChar::PROPERTY_BIDI_CLASS, 'RIGHT_TO_LEFT') === IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT);
var_dump(IntlChar::getPropertyValueEnum(IntlChar::PROPERTY_BIDI_CLASS, 'some made-up string') === IntlChar::PROPERTY_INVALID_CODE);
var_dump(IntlChar::getPropertyValueEnum(123456789, 'RIGHT_TO_LEFT') === IntlChar::PROPERTY_INVALID_CODE);
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(true)
bool(true)

   
```
