---
id: "en-php-function-intlcalendar-getlocale"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getLocale"
title: "Get the locale associated with the object"
signature: "public string|false IntlCalendar::getLocale(int $type)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the locale associated with the object

## Description

Object-oriented style

```php
public string|false IntlCalendar::getLocale(int $type)
```

Procedural style

```php
string|false intlcal_get_locale(IntlCalendar $calendar, int $type)
```

Returns the locale used by this calendar object.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$type`** — Whether to fetch the actual locale (the locale from which the calendar data originates, with `Locale::ACTUAL_LOCALE`) or the valid locale, i.e., the most specific locale supported by ICU relatively to the requested locale – see `Locale::VALID_LOCALE`. From the most general to the most specific, the locales are ordered in this fashion – actual locale, valid locale, requested locale.

## Return Values

A locale string or `false` on failure.

## Examples

**`IntlCalendar::getLocale()`**

```php


<?php
$cal = IntlCalendar::createInstance(IntlTimeZone::getGMT(), 'en_US_CALIFORNIA');
var_dump(
    $cal->getLocale(Locale::ACTUAL_LOCALE),
    $cal->getLocale(Locale::VALID_LOCALE)
);

    
```

The above example will output:

```text


string(2) "en"
string(5) "en_US"

    
```
