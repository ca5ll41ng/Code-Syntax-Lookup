---
id: "en-php-function-numberformatter-settextattribute"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::setTextAttribute"
aliases: ["numfmt_set_text_attribute"]
title: "Set a text attribute"
signature: "public bool NumberFormatter::setTextAttribute(int $attribute, string $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.settextattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a text attribute

## Description

Object-oriented style

```php
public bool NumberFormatter::setTextAttribute(int $attribute, string $value)
```

Procedural style

```php
bool numfmt_set_text_attribute(NumberFormatter $formatter, int $attribute, string $value)
```

Set a text attribute associated with the formatter. An example of a text attribute is the suffix for positive numbers. If the formatter does not understand the attribute, `U_UNSUPPORTED_ERROR` error is produced. Rule-based formatters only understand `NumberFormatter::DEFAULT_RULESET` and `NumberFormatter::PUBLIC_RULESETS`.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$attribute`** — Attribute specifier - one of the text attribute constants.
- **`$value`** — Text for the attribute value.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`numfmt_set_text_attribute()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Prefix: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX)."\n";
echo numfmt_format($fmt, -1234567.891234567890000)."\n";
numfmt_set_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX, "MINUS");
echo "Prefix: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX)."\n";
echo numfmt_format($fmt, -1234567.891234567890000)."\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Prefix: ".$fmt->getTextAttribute(NumberFormatter::NEGATIVE_PREFIX)."\n";
echo $fmt->format(-1234567.891234567890000)."\n";
$fmt->setTextAttribute(NumberFormatter::NEGATIVE_PREFIX, "MINUS");
echo "Prefix: ".$fmt->getTextAttribute(NumberFormatter::NEGATIVE_PREFIX)."\n";
echo $fmt->format(-1234567.891234567890000)."\n";
?>

   
```

The above example will output:

```text


Prefix: -
-1.234.567,891
Prefix: MINUS
MINUS1.234.567,891

  
```

## See Also

`numfmt_get_error_code()` `numfmt_get_text_attribute()` `numfmt_set_attribute()`
