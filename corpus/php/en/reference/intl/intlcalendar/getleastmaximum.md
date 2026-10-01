---
id: "en-php-function-intlcalendar-getleastmaximum"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getLeastMaximum"
title: "Get the smallest local maximum for a field"
signature: "public int|false IntlCalendar::getLeastMaximum(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getleastmaximum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the smallest local maximum for a field

## Description

Object-oriented style

```php
public int|false IntlCalendar::getLeastMaximum(int $field)
```

Procedural style

```php
int|false intlcal_get_least_maximum(IntlCalendar $calendar, int $field)
```

Returns the smallest local maximum for a field. This should be a value smaller or equal to that returned by `IntlCalendar::getActualMaximum()`, which is in its turn smaller or equal to that returned by `IntlCalendar::getMaximum()`.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

An `int` representing a field value in the fieldʼs unit or `false` on failure.

## Examples

**Maxima examples**

```php


<?php
ini_set('date.timezone', 'UTC');
ini_set('intl.default_locale', 'it_IT');

$cal = new IntlGregorianCalendar(2013, 3 /* April */, 6);
var_dump(
    $cal->getLeastMaximum(IntlCalendar::FIELD_DAY_OF_MONTH),  // 28
    $cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH), // 30
    $cal->getMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)        // 31
);

    
```

The above example will output:

```text


int(28)
int(30)
int(31)

    
```

## See Also

`IntlCalendar::getActualMaximum()` `IntlCalendar::getMaximum()` `IntlCalendar::getGreatestMinimum()`
