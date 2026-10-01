---
id: "en-php-function-intldateformatter-parsetocalendar"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::parseToCalendar"
title: "Parse a string into a timestamp, updating an open calendar"
signature: "public int|float|false IntlDateFormatter::parseToCalendar(string $string, int $offset = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.parsetocalendar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse a string into a timestamp, updating an open calendar

## Description

```php
public int|float|false IntlDateFormatter::parseToCalendar(string $string, int $offset = null)
```

Converts `$string` to an incremental time value, starting at `$offset` and consuming as much of the input value as possible.

This method behaves like `IntlDateFormatter::parse()`, except that the time zone of the formatter is updated according to the time zone information contained in the parsed `$string`.

## Parameters

- **`$string`** — The string to convert to a time.
- **`$offset`** — Position at which to start the parsing in `$string` (zero-based). On return, `$offset` holds the position at which parsing ended, whether or not the parse succeeded. If `$offset` is greater than `strlen($string)`, the parse fails immediately and `$offset` is left unchanged.

## Return Values

Timestamp of parsed value, or `false` if value cannot be parsed.

## Examples

**`IntlDateFormatter::parseToCalendar()` example**

```php


<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo $fmt->parseToCalendar('Wednesday, December 20, 1989 at 4:00:00 PM Pacific Standard Time');
?>

   
```

The above example will output:

```text


630201600

   
```

## See Also

 `IntlDateFormatter::parse()` `IntlDateFormatter::format()` `IntlDateFormatter::getErrorCode()` `IntlDateFormatter::getErrorMessage()`
