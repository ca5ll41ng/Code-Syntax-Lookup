---
id: "en-php-function-intlgregoriancalendar-construct"
language: "php"
lang: "en"
category: "function"
name: "IntlGregorianCalendar::__construct"
title: "Create the Gregorian Calendar class"
signature: "public IntlGregorianCalendar::__construct([IntlTimeZone $tz = ...], [string $locale = ...])"
module: "intl"
source_url: "https://www.php.net/manual/en/intlgregoriancalendar.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create the Gregorian Calendar class

## Description

```php
public IntlGregorianCalendar::__construct([IntlTimeZone $tz = ...], [string $locale = ...])
```

```php
public IntlGregorianCalendar::__construct(int $timeZoneOrYear, int $localeOrMonth, int $dayOfMonth)
```

```php
public IntlGregorianCalendar::__construct(int $timeZoneOrYear, int $localeOrMonth, int $dayOfMonth, int $hour, int $minute, [int $second = ...])
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$tz`**
- **`$locale`**
- **`$timeZoneOrYear`**
- **`$localeOrMonth`**
- **`$dayOfMonth`**
- **`$hour`**
- **`$minute`**
- **`$second`**

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | This had been deprecated in favor of the methods `IntlGregorianCalendar::createFromDate()` and `IntlGregorianCalendar::createFromDateTime()`. |
