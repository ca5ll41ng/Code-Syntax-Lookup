---
id: "en-php-function-intlcalendar-roll"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::roll"
title: "Add value to field without carrying into more significant fields"
signature: "public bool IntlCalendar::roll(int $field, int|bool $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.roll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add value to field without carrying into more significant fields

## Description

Object-oriented style

```php
public bool IntlCalendar::roll(int $field, int|bool $value)
```

Procedural style

```php
bool intlcal_roll(IntlCalendar $calendar, int $field, int|bool $value)
```

Adds a (signed) amount to a field. The difference with respect to `IntlCalendar::add()` is that when the field value overflows, it does not carry into more significant fields.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**
- **`$value`** — The (signed) amount to add to the field, `true` for rolling up (adding `1`), or `false` for rolling down (subtracting `1`).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`IntlCalendar::roll()`**

```php


<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');

$cal = new IntlGregorianCalendar(2013, 5 /* June */, 30);

$cal->add(IntlCalendar::FIELD_DAY_OF_MONTH, 1);
var_dump(IntlDateFormatter::formatObject($cal)); // "01/07/2013, 00:00:00"

$cal->set(2013, 5 /* June */, 30);
$cal->roll(IntlCalendar::FIELD_DAY_OF_MONTH, true); // roll up, same as rolling +1
var_dump(IntlDateFormatter::formatObject($cal)); // "01/06/2013, 00:00:00"

    
```

The above example will output:

```text


string(20) "01/07/2013, 00:00:00"
string(20) "01/06/2013, 00:00:00"

    
```

## See Also

`IntlCalendar::add()` `IntlCalendar::set()`
