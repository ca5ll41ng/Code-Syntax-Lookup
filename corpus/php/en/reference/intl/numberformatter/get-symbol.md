---
id: "en-php-function-numberformatter-getsymbol"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::getSymbol"
aliases: ["numfmt_get_symbol"]
title: "Get a symbol value"
signature: "public string|false NumberFormatter::getSymbol(int $symbol)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.getsymbol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a symbol value

## Description

Object-oriented style

```php
public string|false NumberFormatter::getSymbol(int $symbol)
```

Procedural style

```php
string|false numfmt_get_symbol(NumberFormatter $formatter, int $symbol)
```

Get a symbol associated with the formatter. The formatter uses symbols to represent the special locale-dependent characters in a number, for example the percent sign. This API is not supported for rule-based formatters.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$symbol`** — Symbol specifier, one of the format symbol constants.

## Return Values

The symbol string or `false` on error.

## Examples

**`numfmt_get_symbol()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Sep: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
numfmt_set_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");
echo "Sep: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Sep: ".$fmt->getSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
$fmt->setSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");
echo "Sep: ".$fmt->getSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
?>

   
```

The above example will output:

```text


Sep: .
1.234.567,891
Sep: *
1*234*567,891

  
```

## See Also

`numfmt_get_error_code()` `numfmt_set_symbol()`
