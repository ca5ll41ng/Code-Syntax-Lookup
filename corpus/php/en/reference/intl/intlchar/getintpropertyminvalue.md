---
id: "en-php-function-intlchar-getintpropertyminvalue"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getIntPropertyMinValue"
title: "Get the min value for a Unicode property"
signature: "public static int IntlChar::getIntPropertyMinValue(int $property)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getintpropertyminvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the min value for a Unicode property

## Description

```php
public static int IntlChar::getIntPropertyMinValue(int $property)
```

Gets the minimum value for an enumerated/integer/binary Unicode property.

## Parameters

- **`$property`** — The Unicode property to lookup (see the `IntlChar::PROPERTY_{*}` constants).

## Return Values

The minimum value returned by `IntlChar::getIntPropertyValue()` for a Unicode property. `0` if the property selector is out of range.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_BIDI_CLASS));
var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_SCRIPT));
var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_IDEOGRAPHIC));
var_dump(IntlChar::getIntPropertyMinValue(999999999)); // Some made-up value
?>

   
```

The above example will output:

```text

    
int(0)
int(0)
int(0)
int(0)

   
```

## See Also

`IntlChar::hasBinaryProperty()` `IntlChar::getIntPropertyMaxValue()` `IntlChar::getIntPropertyValue()` `IntlChar::getUnicodeVersion()`
