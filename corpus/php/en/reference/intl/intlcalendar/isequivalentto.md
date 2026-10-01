---
id: "en-php-function-intlcalendar-isequivalentto"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::isEquivalentTo"
title: "Whether another calendar is equal but for a different time"
signature: "public bool IntlCalendar::isEquivalentTo(IntlCalendar $other)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.isequivalentto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether another calendar is equal but for a different time

## Description

Object-oriented style

```php
public bool IntlCalendar::isEquivalentTo(IntlCalendar $other)
```

Procedural style

```php
bool intlcal_is_equivalent_to(IntlCalendar $calendar, IntlCalendar $other)
```

Returns whether this and the given object are equivalent for all purposes except as to the time they have set. The locales do not have to match, as long as no change in behavior results from such mismatch. This includes the timezone, whether the lenient mode is set, the repeated and skipped wall time settings, the days of the week when the weekend starts and ceases and the times where such transitions occur. It may also include other calendar specific settings, such as the Gregorian/Julian transition instant.

## Parameters

- **`$calendar`** — An `IntlCalendar` instance.
- **`$other`** — The other calendar against which the comparison is to be made.

## Return Values

Assuming there are no argument errors, returns `true` if the calendars are equivalent except possibly for their set time.

## Examples

**`IntlCalendar::isEquivalentTo()`**

```php


<?php
$cal1 = IntlCalendar::createInstance('Europe/Lisbon', 'pt_PT');
$cal2 = IntlCalendar::createInstance('Europe/Lisbon', 'es_ES');
$cal2->clear();

var_dump($cal1->isEquivalentTo($cal2)); // true

$cal3 = IntlCalendar::createInstance('Europe/Lisbon', 'en_US');
var_dump($cal1->isEquivalentTo($cal3)); // false
var_dump($cal1->getFirstDayOfWeek(),    // 2 (Monday)
$cal3->getFirstDayOfWeek());            // 1 (Sunday)

    
```

The above example will output:

```text


bool(true)
bool(false)
int(2)
int(1)

    
```

## See Also

`IntlCalendar::equals()`
