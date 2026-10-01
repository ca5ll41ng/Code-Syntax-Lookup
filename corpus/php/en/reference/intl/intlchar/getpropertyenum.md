---
id: "en-php-function-intlchar-getpropertyenum"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getPropertyEnum"
title: "Get the property constant value for a given property name"
signature: "public static int IntlChar::getPropertyEnum(string $alias)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getpropertyenum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the property constant value for a given property name

## Description

```php
public static int IntlChar::getPropertyEnum(string $alias)
```

Returns the property constant value for a given property name, as specified in the Unicode database file PropertyAliases.txt. Short, long, and any other variants are recognized.

In addition, this function maps the synthetic names "gcm" / "General_Category_Mask" to the property `IntlChar::PROPERTY_GENERAL_CATEGORY_MASK`. These names are not in PropertyAliases.txt.

This function complements `IntlChar::getPropertyName()`.

## Parameters

- **`$alias`** — The property name to be matched. The name is compared using "loose matching" as described in PropertyAliases.txt.

## Return Values

Returns an `IntlChar::PROPERTY_{*}` constant value, or `IntlChar::PROPERTY_INVALID_CODE` if the given name does not match any property.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getPropertyEnum('Bidi_Class') === IntlChar::PROPERTY_BIDI_CLASS);
var_dump(IntlChar::getPropertyEnum('script') === IntlChar::PROPERTY_SCRIPT);
var_dump(IntlChar::getPropertyEnum('IDEOGRAPHIC') === IntlChar::PROPERTY_IDEOGRAPHIC);
var_dump(IntlChar::getPropertyEnum('Some made-up string') === IntlChar::PROPERTY_INVALID_CODE);
?>

   
```

The above example will output:

```text

    
bool(true)
bool(true)
bool(true)
bool(true)

   
```

## See Also

`IntlChar::getPropertyName()`
