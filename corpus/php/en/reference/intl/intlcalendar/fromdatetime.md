---
id: "en-php-function-intlcalendar-fromdatetime"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::fromDateTime"
title: "Create an IntlCalendar from a DateTime object or string"
signature: "public static IntlCalendar|null IntlCalendar::fromDateTime(DateTime|string $datetime, string|null $locale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.fromdatetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create an IntlCalendar from a DateTime object or string

## Description

Object-oriented style

```php
public static IntlCalendar|null IntlCalendar::fromDateTime(DateTime|string $datetime, string|null $locale = null)
```

Procedural style

```php
IntlCalendar|null intlcal_from_date_time(DateTime|string $datetime, string|null $locale = null)
```

Creates an `IntlCalendar` object either from a `DateTime` object or from a string from which a `DateTime` object can be built.

The new calendar will represent not only the same instant as the given `DateTime` (subject to precision loss for dates very far into the past or future), but also the same timezone (subject to the caveat that different timezone databases will be used, and therefore the results may differ).

## Parameters

- **`$datetime`** — A `DateTime` object or a `string` that can be passed to `DateTime::__construct()`.

## Return Values

The created `IntlCalendar` object or `null` in case of failure. If a `string` is passed, any exception that occurs inside the `DateTime` constructor is propagated.

## Examples

**`IntlCalendar::fromDateTime()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');

//same as IntlCalendar::fromDateTime(new DateTime(...))
$cal1 = IntlCalendar::fromDateTime('2013-02-28 00:01:02 Europe/Berlin', 'de_DE');

//Note the timezone is Europe/Berlin, not the default Europe/Lisbon
echo IntlDateFormatter::formatObject($cal1, 'yyyy MMMM d HH:mm:ss VVVV', 'de_DE'), "\n";


    
```

The above example will output:

```text


2013 Februar 28 00:01:02 Deutschland Zeit

    
```
