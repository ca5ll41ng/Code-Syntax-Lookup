---
id: "en-php-function-datetimeimmutable-setdate"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::setDate"
title: "Sets the date"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::setDate() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::setDate(int $year, int $month, int $day)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.setdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the date

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::setDate() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::setDate(int $year, int $month, int $day)
```

Returns a new DateTimeImmutable object with the current date of the DateTimeImmutable object set to the given date.

## Parameters

- **`$object`** — Procedural style only: A `DateTime` object returned by `date_create()`. The function modifies this object.
- **`$year`** — Year of the date.
- **`$month`** — Month of the date.
- **`$day`** — Day of the date.

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Examples

**`DateTimeImmutable::setDate()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable();
$newDate = $date->setDate(2001, 2, 3);
echo $newDate->format('Y-m-d');

   
```

The above example will output:

```text


2001-02-03

   
```

**Values exceeding ranges are added to their parent values**

```php


<?php
$date = new DateTimeImmutable();

$newDate = $date->setDate(2001, 2, 28);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setDate(2001, 2, 29);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setDate(2001, 14, 3);
echo $newDate->format('Y-m-d') . "\n";

   
```

The above example will output:

```text


2001-02-28
2001-03-01
2002-02-03

   
```

## See Also

 `DateTimeImmutable::setISODate()` `DateTimeImmutable::setTime()`
