---
id: "en-php-function-numberformatter-create"
language: "php"
lang: "en"
category: "function"
name: "NumberFormatter::create"
aliases: ["numfmt_create","NumberFormatter::__construct"]
title: "Create a number formatter"
signature: "public static NumberFormatter|null NumberFormatter::create(string $locale, int $style, string|null $pattern = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/numberformatter.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a number formatter

## Description

Object-oriented style (method)

```php
public static NumberFormatter|null NumberFormatter::create(string $locale, int $style, string|null $pattern = null)
```

Procedural style

```php
NumberFormatter|null numfmt_create(string $locale, int $style, string|null $pattern = null)
```

Object-oriented style (constructor):

```php
public NumberFormatter::__construct(string $locale, int $style, string|null $pattern = null)
```

Creates a number formatter.

## Parameters

- **`$locale`** — Locale in which the number would be formatted (locale name, e.g. en_CA).
- **`$style`** — Style of the formatting, one of the format style constants. If `NumberFormatter::PATTERN_DECIMAL` or `NumberFormatter::PATTERN_RULEBASED` is passed then the number format is opened using the given pattern, which must conform to the syntax described in [ICU DecimalFormat documentation]() or [ICU RuleBasedNumberFormat documentation](), respectively.
- **`$pattern`** — Pattern string if the chosen style requires a pattern.

## Return Values

Returns `NumberFormatter` object or `null` on error.

## Errors/Exceptions

A ValueError is thrown if `$locale` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | A ValueError is thrown if `$locale` is invalid. |
| 8.0.0 | `$pattern` is nullable now. |

## Examples

**`numfmt_create()` example**

```php


<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
$fmt = numfmt_create( 'it', NumberFormatter::SPELLOUT );
echo numfmt_format($fmt, 1142)."\n";
?>

   
```

**`NumberFormatter::create()` example**

```php


<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo $fmt->format(1234567.891234567890000)."\n";
$fmt = new NumberFormatter( 'it', NumberFormatter::SPELLOUT );
echo $fmt->format(1142)."\n";
?>

   
```

The above example will output:

```text


1.234.567,891
millicentoquarantadue

  
```

## See Also

`numfmt_format()` `numfmt_parse()`
