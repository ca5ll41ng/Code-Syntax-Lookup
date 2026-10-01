---
id: "en-php-function-intlcalendar-createinstance"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::createInstance"
title: "Create a new IntlCalendar"
signature: "public static IntlCalendar|null IntlCalendar::createInstance(IntlTimeZone|DateTimeZone|string|null $timezone = null, string|null $locale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.createinstance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new IntlCalendar

## Description

Object-oriented style

```php
public static IntlCalendar|null IntlCalendar::createInstance(IntlTimeZone|DateTimeZone|string|null $timezone = null, string|null $locale = null)
```

Procedural style

```php
IntlCalendar|null intlcal_create_instance(IntlTimeZone|DateTimeZone|string|null $timezone = null, string|null $locale = null)
```

Given a timezone and locale, this method creates an `IntlCalendar` object. This factory method may return a subclass of `IntlCalendar`.

The calendar created will represent the time instance at which it was created, based on the system time. The fields can all be cleared by calling `IntCalendar::clear()` with no arguments. See also `IntlGregorianCalendar::__construct()`.

## Parameters

- **`$timezone`** — The timezone to use.
- **`$locale`** — A locale to use or `null` to use the default locale.

## Return Values

The created `IntlCalendar` instance or `null` on failure.

## Examples

**`IntlCalendar::createInstance()`**

```php


<?php
ini_set('intl.default_locale', 'es_ES');
ini_set('date.timezone', 'Europe/Madrid');

$cal = IntlCalendar::createInstance();
echo "No arguments\n";
var_dump(get_class($cal),
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));
echo "\n";

echo "Explicit timezone\n";
$cal = IntlCalendar::createInstance(IntlTimeZone::getGMT());
var_dump(get_class($cal),
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));
echo "\n";

echo "Explicit locale (with calendar)\n";
$cal = IntlCalendar::createInstance(NULL, 'es_ES@calendar=persian');
var_dump(get_class($cal),
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));


    
```

The above example will output:

```text


No arguments
string(21) "IntlGregorianCalendar"
string(68) "martes 18 de junio de 2013 14:11:02 Hora de verano de Europa Central"

Explicit timezone
string(21) "IntlGregorianCalendar"
string(45) "martes 18 de junio de 2013 12:11:02 GMT+00:00"

Explicit locale (with calendar)
string(12) "IntlCalendar"
string(70) "martes 28 de Khordad de 1392 14:11:02 Hora de verano de Europa Central"


    
```

## See Also

`IntlGregorianCalendar::__construct()`
