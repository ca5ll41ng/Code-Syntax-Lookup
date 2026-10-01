---
id: "en-php-function-intlcalendar-add"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::add"
title: "Add a (signed) amount of time to a field"
signature: "public bool IntlCalendar::add(int $field, int $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a (signed) amount of time to a field

## Description

Object-oriented style

```php
public bool IntlCalendar::add(int $field, int $value)
```

Procedural style

```php
bool intlcal_add(IntlCalendar $calendar, int $field, int $value)
```

Add a signed amount to a field. Adding a positive amount allows advances in time, even if the numeric value of the field decreases (e.g. when working with years in BC dates).

Other fields may need to adjusted – for instance, adding a month to the 31st of January will result in the 28th (or 29th) of February. Contrary to `IntlCalendar::roll()`, when a value wraps around, more significant fields may change. For instance, adding a day to the 31st of January will result in the 1st of February, not the 1st of January.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**
- **`$value`** — The signed amount to add to the current field. If the amount is positive, the instant will be moved forward; if it is negative, the instant will be moved into the past. The unit is implicit to the field type. For instance, hours for `IntlCalendar::FIELD_HOUR_OF_DAY`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`IntlCalendar::add()`**

```php


<?php
ini_set('intl.default_locale', 'fr_FR');
ini_set('date.timezone', 'UTC');

$cal = new IntlGregorianCalendar(2012, 0 /* January */, 31);
echo IntlDateFormatter::formatObject($cal), "\n";

$cal->add(IntlCalendar::FIELD_MONTH, 1);
echo IntlDateFormatter::formatObject($cal), "\n";

$cal->add(IntlCalendar::FIELD_DAY_OF_MONTH, 1);
echo IntlDateFormatter::formatObject($cal), "\n";

    
```

The above example will output:

```text


31 janv. 2012 00:00:00
29 févr. 2012 00:00:00
1 mars 2012 00:00:00

    
```
