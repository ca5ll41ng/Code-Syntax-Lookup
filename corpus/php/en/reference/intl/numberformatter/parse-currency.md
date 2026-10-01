---
id: "en-php-function-numberformatter-parsecurrency"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::parseCurrency"
aliases: ["numfmt_parse_currency"]
title: "Parse a currency number"
signature: "public float|false NumberFormatter::parseCurrency(string $string, string $currency, int $offset = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.parsecurrency.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a currency number

## Description

Object-oriented style

```php
public float|false NumberFormatter::parseCurrency(string $string, string $currency, int $offset = null)
```

Procedural style

```php
float|false numfmt_parse_currency(NumberFormatter $formatter, string $string, string $currency, int $offset = null)
```

Parse a string into a float and a currency using the current formatter.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$currency`** — Parameter to receive the currency name (3-letter ISO 4217 currency code).
- **`$offset`** — Offset in the string at which to begin parsing. On return, this value will hold the offset at which parsing ended.

## Return Values

The parsed numeric value or `false` on error.

## Examples

**`numfmt_parse_currency()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::CURRENCY );
$num = "1.234.567,89\xc2\xa0$";
echo "We have ".numfmt_parse_currency($fmt, $num, $curr)." in $curr\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::CURRENCY );
$num = "1.234.567,89\xc2\xa0$";
echo "We have ".$fmt->parseCurrency($num, $curr)." in $curr\n";
?>

   
```

The above example will output:

```text


We have 1234567.89 in USD

  
```

## See Also

`numfmt_get_error_code()` `numfmt_parse()` `numfmt_format_currency()`
