---
id: "en-php-function-intldateformatter-getlocale"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getLocale"
aliases: ["datefmt_get_locale"]
title: "Get the locale used by formatter"
signature: "public string|false IntlDateFormatter::getLocale(int $type = ULOC_ACTUAL_LOCALE)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.getlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the locale used by formatter

## Description

Object-oriented style

```php
public string|false IntlDateFormatter::getLocale(int $type = ULOC_ACTUAL_LOCALE)
```

Procedural style

```php
string|false datefmt_get_locale(IntlDateFormatter $formatter, int $type = ULOC_ACTUAL_LOCALE)
```

Get locale used by the formatter.

## Parameters

- **`$formatter`** — The formatter resource
- **`$type`** — You can choose between valid and actual locale ( `Locale::VALID_LOCALE`, `Locale::ACTUAL_LOCALE`, respectively). The default is the actual locale.

## Return Values

The locale of this formatter, or `false` on failure.

## Examples

**`datefmt_get_locale()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'locale of the formatter is : ' . datefmt_get_locale($fmt);
echo 'First Formatted output is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'locale of the formatter is : ' . datefmt_get_locale($fmt);
echo 'Second Formatted output is ' . datefmt_format($fmt, 0);

?>

    
```

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
echo 'locale of the formatter is : ' . $fmt->getLocale();
echo 'First Formatted output is ' . $fmt->format(0);

$fmt = new IntlDateFormatter(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'locale of the formatter is : ' . $fmt->getLocale();
echo 'Second Formatted output is ' . $fmt->format(0);

?>

    
```

The above example will output:

```text


locale of the formatter is : en
First Formatted output is Wednesday, December 31, 1969 4:00:00 PM PT
locale of the formatter is : de
Second Formatted output is Mittwoch, 31. Dezember 1969 16:00 Uhr GMT-08:00

  
```

## See Also

`datefmt_create()`
