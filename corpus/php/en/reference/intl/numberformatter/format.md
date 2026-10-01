---
id: "en-php-function-numberformatter-format"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::format"
aliases: ["numfmt_format"]
title: "Format a number"
signature: "public string|false NumberFormatter::format(int|float $num, int $type = NumberFormatter::TYPE_DEFAULT)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Format a number

## Description

Object-oriented style

```php
public string|false NumberFormatter::format(int|float $num, int $type = NumberFormatter::TYPE_DEFAULT)
```

Procedural style

```php
string|false numfmt_format(NumberFormatter $formatter, int|float $num, int $type = NumberFormatter::TYPE_DEFAULT)
```

Format a numeric value according to the formatter rules.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$num`** — The value to format. Can be `int` or `float`, other values will be converted to a numeric value.
- **`$type`** — The formatting type to use. Note that `NumberFormatter::TYPE_CURRENCY` is not supported; use `NumberFormatter::formatCurrency()` instead.

## Return Values

Returns the string containing formatted value, or `false` on error.

## Examples

**`numfmt_format()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$data = numfmt_format($fmt, 1234567.891234567890000);
var_dump($data);
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$data = $fmt->format(1234567.891234567890000);
var_dump($data);
?>

   
```

The above example will output:

```text


string(13) "1.234.567,891"

  
```

## Notes

> Formats achievable by this method of formatting cannot fully use the possibilities of underlying ICU library, such as to format currency with narrow currency symbol.
>
> To fully utilize them use `msgfmt_format_message()`.

## See Also

`numfmt_get_error_code()` `numfmt_format_currency()` `numfmt_parse()` `msgfmt_format_message()`
