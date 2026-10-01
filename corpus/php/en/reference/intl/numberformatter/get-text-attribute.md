---
id: "en-php-function-numberformatter-gettextattribute"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getTextAttribute"
aliases: ["numfmt_get_text_attribute"]
title: "Get a text attribute"
signature: "public string|false NumberFormatter::getTextAttribute(int $attribute)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.gettextattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a text attribute

## Description

Object-oriented style

```php
public string|false NumberFormatter::getTextAttribute(int $attribute)
```

Procedural style

```php
string|false numfmt_get_text_attribute(NumberFormatter $formatter, int $attribute)
```

Get a text attribute associated with the formatter. An example of a text attribute is the suffix for positive numbers. If the formatter does not understand the attribute, `U_UNSUPPORTED_ERROR` error is produced. Rule-based formatters only understand `NumberFormatter::DEFAULT_RULESET` and `NumberFormatter::PUBLIC_RULESETS`.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$attribute`** — Attribute specifier - one of the text attribute constants.

## Return Values

Return attribute value on success, or `false` on error.

## Examples

**`numfmt_get_text_attribute()` example**

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

`numfmt_get_error_code()` `numfmt_get_attribute()` `numfmt_set_text_attribute()`
