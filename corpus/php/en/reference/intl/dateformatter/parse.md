---
id: "en-php-function-intldateformatter-parse"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::parse"
aliases: ["datefmt_parse"]
title: "Parse string to a timestamp value"
signature: "public int|float|false IntlDateFormatter::parse(string $string, int $offset = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse string to a timestamp value

## Description

Object-oriented style

```php
public int|float|false IntlDateFormatter::parse(string $string, int $offset = null)
```

Procedural style

```php
int|float|false datefmt_parse(IntlDateFormatter $formatter, string $string, int $offset = null)
```

Converts `$string` to an incremental time value, starting at `$offset` and consuming as much of the input value as possible.

## Parameters

- **`$formatter`** — The `IntlDateFormatter` object.
- **`$string`** — string to convert to a time
- **`$offset`** — Position at which to start the parsing in `$string` (zero-based). On return, `$offset` holds the position at which parsing ended, whether or not the parse succeeded. If `$offset` is negative or greater than `strlen($string)`, the parse fails immediately and `$offset` is left unchanged.

## Return Values

Timestamp of parsed value, or `false` if value cannot be parsed.

## Examples

**OO example**

```php


<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'First parsed output is ' . $fmt->parse('Wednesday, December 20, 1989 4:00:00 PM PT');
$fmt = new IntlDateFormatter(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
?>

    
```

**`datefmt_parse()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'First parsed output is ' . datefmt_parse($fmt, 'Wednesday, December 20, 1989 4:00:00 PM PT');
$fmt = datefmt_create(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Second parsed output is ' . datefmt_parse($fmt, 'Mittwoch, 20. Dezember 1989 16:00 Uhr GMT-08:00');
?>

    
```

The above example will output:

```text


First parsed output is 630201600
Second parsed output is 630201600

     
```

## See Also

`datefmt_create()` `datefmt_format()` `datefmt_localtime()` `datefmt_get_error_code()` `datefmt_get_error_message()`
