---
id: "en-php-function-intlcalendar-isset"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::isSet"
title: "Whether a field is set"
signature: "public bool IntlCalendar::isSet(int $field)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.isset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether a field is set

## Description

Object-oriented style

```php
public bool IntlCalendar::isSet(int $field)
```

Procedural style

```php
bool intlcal_is_set(IntlCalendar $calendar, int $field)
```

Returns whether a field is set (as opposed to clear). Set fields take priority over unset fields and their default values when the date/time is being calculated. Fields set later take priority over fields set earlier.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$field`**

## Return Values

Assuming there are no argument errors, returns `true` if the field is set.

## Examples

See the example on `IntlCalendar::clear()`.

## See Also

`IntlCalendar::clear()` `IntlCalendar::set()`
