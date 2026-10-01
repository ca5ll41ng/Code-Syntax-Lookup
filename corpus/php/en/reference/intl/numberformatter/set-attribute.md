---
id: "en-php-function-numberformatter-setattribute"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::setAttribute"
aliases: ["numfmt_set_attribute"]
title: "Set an attribute"
signature: "public bool NumberFormatter::setAttribute(int $attribute, int|float $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.setattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set an attribute

## Description

Object-oriented style

```php
public bool NumberFormatter::setAttribute(int $attribute, int|float $value)
```

Procedural style

```php
bool numfmt_set_attribute(NumberFormatter $formatter, int $attribute, int|float $value)
```

Set a numeric attribute associated with the formatter. An example of a numeric attribute is the number of integer digits the formatter will produce.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$attribute`** — Attribute specifier - one of the numeric attribute constants.
- **`$value`** — The attribute value.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`numfmt_set_attribute()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Digits: ".numfmt_get_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
numfmt_set_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS, 2);
echo "Digits: ".numfmt_get_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Digits: ".$fmt->getAttribute(NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
$fmt->setAttribute(NumberFormatter::MAX_FRACTION_DIGITS, 2);
echo "Digits: ".$fmt->getAttribute(NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
?>

   
```

The above example will output:

```text


Digits: 3
1.234.567,891
Digits: 2
1.234.567,89

  
```

**Using `NumberFormatter::ROUNDING_MODE` to truncate values**

By default, `NumberFormatter` rounds values. Using `NumberFormatter::ROUND_DOWN` as the `NumberFormatter::ROUNDING_MODE` truncates the value to the specified number of fraction digits without rounding.

```php


<?php
$fmt = new NumberFormatter('en_US', NumberFormatter::DECIMAL);
$fmt->setAttribute(NumberFormatter::FRACTION_DIGITS, 2);

echo "Default rounding mode:\n";
echo $fmt->format(3.789), "\n"; // 3.79 (rounded up)
echo $fmt->format(3.781), "\n"; // 3.78 (rounded down)

$fmt->setAttribute(NumberFormatter::ROUNDING_MODE, NumberFormatter::ROUND_DOWN);

echo "\nWith ROUND_DOWN (truncate):\n";
echo $fmt->format(3.789), "\n"; // 3.78 (truncated)
echo $fmt->format(3.781), "\n"; // 3.78 (truncated)
?>

   
```

The above example will output:

```text


Default rounding mode:
3.79
3.78

With ROUND_DOWN (truncate):
3.78
3.78

   
```

## See Also

`numfmt_get_error_code()` `numfmt_get_attribute()` `numfmt_set_text_attribute()`
