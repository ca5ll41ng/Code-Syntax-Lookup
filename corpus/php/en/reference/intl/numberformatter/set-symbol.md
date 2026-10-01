---
id: "en-php-function-numberformatter-setsymbol"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::setSymbol"
aliases: ["numfmt_set_symbol"]
title: "Set a symbol value"
signature: "public bool NumberFormatter::setSymbol(int $symbol, string $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.setsymbol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a symbol value

## Description

Object-oriented style

```php
public bool NumberFormatter::setSymbol(int $symbol, string $value)
```

Procedural style

```php
bool numfmt_set_symbol(NumberFormatter $formatter, int $symbol, string $value)
```

Set a symbol associated with the formatter. The formatter uses symbols to represent the special locale-dependent characters in a number, for example the percent sign. This API is not supported for rule-based formatters.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$symbol`** — Symbol specifier, one of the format symbol constants.
- **`$value`** — Text for the symbol.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`numfmt_set_symbol()` example**

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

`numfmt_get_error_code()` `numfmt_get_symbol()`
