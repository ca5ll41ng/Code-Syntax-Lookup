---
id: "en-php-function-intlcalendar-before"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::before"
title: "Whether this objectʼs time is before that of the passed object"
signature: "public bool IntlCalendar::before(IntlCalendar $other)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.before.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether this objectʼs time is before that of the passed object

## Description

Object-oriented style

```php
public bool IntlCalendar::before(IntlCalendar $other)
```

Procedural style

```php
bool intlcal_before(IntlCalendar $calendar, IntlCalendar $other)
```

Returns whether this objectʼs time precedes the argumentʼs time.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$other`** — The calendar whose time will be checked against the primary objectʼs time.

## Return Values

Returns `true` if this objectʼs current time is before that of the `$calendar` argumentʼs time. Returns `false` otherwise.

On failure `false` is also returned. To detect error conditions use `intl_get_error_code()`, or set up Intl to throw exceptions.
