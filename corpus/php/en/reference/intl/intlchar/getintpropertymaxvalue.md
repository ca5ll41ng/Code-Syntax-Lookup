---
id: "en-php-function-intlchar-getintpropertymaxvalue"
language: "php"
lang: "en"
category: "function"
name: "IntlChar::getIntPropertyMaxValue"
title: "Get the max value for a Unicode property"
signature: "public static int IntlChar::getIntPropertyMaxValue(int $property)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlchar.getintpropertymaxvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the max value for a Unicode property

## Description

```php
public static int IntlChar::getIntPropertyMaxValue(int $property)
```

Gets the maximum value for an enumerated/integer/binary Unicode property.

## Parameters

- **`$property`** — The Unicode property to lookup (see the `IntlChar::PROPERTY_{*}` constants).

## Return Values

The maximum value returned by `IntlChar::getIntPropertyValue()` for a Unicode property. `<=0` if the property selector is out of range.

## Examples

**Testing different properties**

```php

    
<?php
var_dump(IntlChar::getIntPropertyMaxValue(IntlChar::PROPERTY_BIDI_CLASS));
var_dump(IntlChar::getIntPropertyMaxValue(IntlChar::PROPERTY_SCRIPT));
var_dump(IntlChar::getIntPropertyMaxValue(IntlChar::PROPERTY_IDEOGRAPHIC));
var_dump(IntlChar::getIntPropertyMaxValue(999999999)); // Some made-up value
?>

   
```

The above example will output:

```text

    
int(22)
int(166)
int(1)
int(-1)

   
```

## See Also

`IntlChar::hasBinaryProperty()` `IntlChar::getIntPropertyMinValue()` `IntlChar::getIntPropertyValue()` `IntlChar::getUnicodeVersion()`
