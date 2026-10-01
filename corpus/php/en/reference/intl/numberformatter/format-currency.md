---
id: "en-php-function-numberformatter-formatcurrency"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::formatCurrency"
aliases: ["numfmt_format_currency"]
title: "Format a currency value"
signature: "public string|false NumberFormatter::formatCurrency(float $amount, string $currency)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.formatcurrency.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Format a currency value

## Description

Object-oriented style

```php
public string|false NumberFormatter::formatCurrency(float $amount, string $currency)
```

Procedural style

```php
string|false numfmt_format_currency(NumberFormatter $formatter, float $amount, string $currency)
```

Format the currency value according to the formatter rules.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$amount`** — The numeric currency value.
- **`$currency`** — The 3-letter ISO 4217 currency code indicating the currency to use.

## Return Values

String representing the formatted currency value, or `false` on failure.

## Examples

**`numfmt_format_currency()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::CURRENCY );
echo numfmt_format_currency($fmt, 1234567.891234567890000, "EUR")."\n";
echo numfmt_format_currency($fmt, 1234567.891234567890000, "RUR")."\n";
$fmt = numfmt_create( 'ru_RU', NumberFormatter::CURRENCY );
echo numfmt_format_currency($fmt, 1234567.891234567890000, "EUR")."\n";
echo numfmt_format_currency($fmt, 1234567.891234567890000, "RUR")."\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::CURRENCY );
echo $fmt->formatCurrency(1234567.891234567890000, "EUR")."\n";
echo $fmt->formatCurrency(1234567.891234567890000, "RUR")."\n";
$fmt = new NumberFormatter( 'ru_RU', NumberFormatter::CURRENCY );
echo $fmt->formatCurrency(1234567.891234567890000, "EUR")."\n";
echo $fmt->formatCurrency(1234567.891234567890000, "RUR")."\n";
?>

   
```

The above example will output:

```text


1.234.567,89 €
1.234.567,89 RUR
1 234 567,89€
1 234 567,89р.

  
```

## Notes

> Formats achievable by this method of formatting cannot fully use the possibilities of underlying ICU library, such as to format currency with narrow currency symbol.
>
> To fully utilize them use `msgfmt_format_message()`.

## See Also

`numfmt_get_error_code()` `numfmt_format()` `numfmt_parse_currency()` `msgfmt_format_message()`
