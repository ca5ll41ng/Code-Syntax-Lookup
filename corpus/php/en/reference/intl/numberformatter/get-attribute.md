---
id: "en-php-function-numberformatter-getattribute"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getAttribute"
aliases: ["numfmt_get_attribute"]
title: "Get an attribute"
signature: "public int|float|false NumberFormatter::getAttribute(int $attribute)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.getattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an attribute

## Description

Object-oriented style

```php
public int|float|false NumberFormatter::getAttribute(int $attribute)
```

Procedural style

```php
int|float|false numfmt_get_attribute(NumberFormatter $formatter, int $attribute)
```

Get a numeric attribute associated with the formatter. An example of a numeric attribute is the number of integer digits the formatter will produce.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$attribute`** — Attribute specifier - one of the numeric attribute constants.

## Return Values

Return attribute value on success, or `false` on error.

## Examples

**`numfmt_get_attribute()` example**

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

## See Also

`numfmt_get_error_code()` `numfmt_get_text_attribute()` `numfmt_set_attribute()`
