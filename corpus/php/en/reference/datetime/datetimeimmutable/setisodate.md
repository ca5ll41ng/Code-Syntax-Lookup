---
id: "en-php-function-datetimeimmutable-setisodate"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::setISODate"
title: "Sets the ISO date"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::setISODate() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::setISODate(int $year, int $week, int $dayOfWeek = 1)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.setisodate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the ISO date

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::setISODate() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::setISODate(int $year, int $week, int $dayOfWeek = 1)
```

Returns a new DateTimeImmutable object with the date set according to the ISO 8601 standard - using weeks and day offsets rather than specific dates.

## Parameters

- **`$year`** — Year of the date.
- **`$week`** — Week of the date.
- **`$dayOfWeek`** — Offset from the first day of the week.

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Examples

**`DateTimeImmutable::setISODate()` example**

Object-oriented style

```php


<?php

$date = new DateTimeImmutable();

$newDate = $date->setISODate(2008, 2);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setISODate(2008, 2, 7);
echo $newDate->format('Y-m-d') . "\n";

   
```

The above example will output:

```text


2008-01-07
2008-01-13

   
```

Procedural style

```php


<?php

$date = date_create();

date_isodate_set($date, 2008, 2);
echo date_format($date, 'Y-m-d') . "\n";

date_isodate_set($date, 2008, 2, 7);
echo date_format($date, 'Y-m-d') . "\n";

   
```

The above example will output:

```text


2008-01-07
2008-01-13

   
```

**Values exceeding ranges are added to their parent values**

```php


<?php

$date = new DateTimeImmutable();

$newDate = $date->setISODate(2008, 2, 7);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setISODate(2008, 2, 8);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setISODate(2008, 53, 7);
echo $newDate->format('Y-m-d') . "\n";

   
```

The above example will output:

```text


2008-01-13
2008-01-14
2009-01-04

   
```

**Finding the month a week is in**

```php


<?php

$date = new DateTimeImmutable();
$newDate = $date->setISODate(2008, 14);
echo $newDate->format('n');

   
```

The above example will output:

```text


3

   
```

## See Also

 `DateTimeImmutable::setDate()` `DateTimeImmutable::setTime()`
