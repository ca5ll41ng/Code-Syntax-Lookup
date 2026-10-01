---
id: "en-php-function-numberformatter-parse"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::parse"
aliases: ["numfmt_parse"]
title: "Parse a number"
signature: "public int|float|false NumberFormatter::parse(string $string, int $type = NumberFormatter::TYPE_DOUBLE, int $offset = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a number

## Description

Object-oriented style

```php
public int|float|false NumberFormatter::parse(string $string, int $type = NumberFormatter::TYPE_DOUBLE, int $offset = null)
```

Procedural style

```php
int|float|false numfmt_parse(NumberFormatter $formatter, string $string, int $type = NumberFormatter::TYPE_DOUBLE, int $offset = null)
```

Parse a string into a number using the current formatter rules.

## Parameters

- **`$formatter`** — `NumberFormatter` object.
- **`$string`** — The string to parse for the number.
- **`$type`** — The formatting type to use. By default, `NumberFormatter::TYPE_DOUBLE` is used. Note that `NumberFormatter::TYPE_CURRENCY` is not supported; use `NumberFormatter::parseCurrency()` instead.
- **`$offset`** — Offset in the string at which to begin parsing. On return, this value will hold the offset at which parsing ended.

## Return Values

The value of the parsed number or `false` on error.

## Examples

**`numfmt_parse()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$num = "1.234.567,891";
echo numfmt_parse($fmt, $num)."\n";
echo numfmt_parse($fmt, $num, NumberFormatter::TYPE_INT32)."\n";
?>

   
```

**OO example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$num = "1.234.567,891";
echo $fmt->parse($num)."\n";
echo $fmt->parse($num, NumberFormatter::TYPE_INT32)."\n";
?>

   
```

The above example will output:

```text


1234567.891
1234567

  
```

## See Also

`numfmt_get_error_code()` `numfmt_format()` `numfmt_parse_currency()`
