---
id: "en-php-function-numberformatter-setpattern"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::setPattern"
aliases: ["numfmt_set_pattern"]
title: "Set formatter pattern"
signature: "public bool NumberFormatter::setPattern(string $pattern)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.setpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set formatter pattern

## Description

Object-oriented style

```php
public bool NumberFormatter::setPattern(string $pattern)
```

Procedural style

```php
bool numfmt_set_pattern(NumberFormatter $formatter, string $pattern)
```

Set the pattern used by the formatter. Can not be used on a rule-based formatter.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$pattern`** — Pattern in syntax described in [ICU DecimalFormat documentation]().

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`numfmt_set_pattern()` example**

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

`numfmt_get_error_code()` `numfmt_create()` `numfmt_get_pattern()`
