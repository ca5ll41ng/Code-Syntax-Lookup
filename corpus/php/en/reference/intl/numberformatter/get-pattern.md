---
id: "en-php-function-numberformatter-getpattern"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getPattern"
aliases: ["numfmt_get_pattern"]
title: "Get formatter pattern"
signature: "public string|false NumberFormatter::getPattern()"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.getpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get formatter pattern

## Description

Object-oriented style

```php
public string|false NumberFormatter::getPattern()
```

Procedural style

```php
string|false numfmt_get_pattern(NumberFormatter $formatter)
```

Extract pattern used by the formatter.

## Parameters

- **`$formatter`** — `NumberFormatter` object.

## Return Values

Pattern `string` that is used by the formatter, or `false` if an error happens.

## Examples

**`numfmt_get_pattern()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Pattern: ".numfmt_get_pattern($fmt)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
numfmt_set_pattern($fmt, "#0.# kg");
echo "Pattern: ".numfmt_get_pattern($fmt)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Pattern: ".$fmt->getPattern()."\n";
echo $fmt->format(1234567.891234567890000)."\n";
$fmt->setPattern("#0.# kg");
echo "Pattern: ".$fmt->getPattern()."\n";
echo $fmt->format(1234567.891234567890000)."\n";
?>

   
```

The above example will output:

```text


Pattern: #,##0.###
1.234.567,891
Pattern: #0.# kg
1234567,9 kg

  
```

## See Also

`numfmt_get_error_code()` `numfmt_set_pattern()` `numfmt_create()`
