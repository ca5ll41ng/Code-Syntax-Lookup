---
id: "en-php-function-datetimeimmutable-add"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::add"
title: "Returns a new object, with added amount of days, months, years, hours, minutes and seconds"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::add() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::add(DateInterval $interval)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a new object, with added amount of days, months, years, hours, minutes and seconds

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::add() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::add(DateInterval $interval)
```

Creates a new `DateTimeImmutable` object, and adds the specified `DateInterval` object to this, to represent the new value.

## Parameters

- **`$interval`** — A `DateInterval` object

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Examples

**`DateTimeImmutable::add()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable('2000-01-01');
$newDate = $date->add(new DateInterval('P10D'));
echo $newDate->format('Y-m-d') . "\n";
?>

   
```

**Further `DateTimeImmutable::add()` examples**

```php


<?php
$date = new DateTimeImmutable('2000-01-01');
$newDate = $date->add(new DateInterval('PT10H30S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";

$date = new DateTimeImmutable('2000-01-01');
$newDate = $date->add(new DateInterval('P7Y5M4DT4H3M2S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>

   
```

The above example will output:

```text


2000-01-01 10:00:30
2007-06-05 04:03:02

   
```

**Beware when adding months**

```php


<?php
$date = new DateTimeImmutable('2000-12-31');
$interval = new DateInterval('P1M');

$newDate1 = $date->add($interval);
echo $newDate1->format('Y-m-d') . "\n";

$newDate2 = $newDate1->add($interval);
echo $newDate2->format('Y-m-d') . "\n";
?>

   
```

The above example will output:

```text


2001-01-31
2001-03-03

   
```

## See Also

 `DateTimeImmutable::sub()` `DateTimeImmutable::diff()` `DateTimeImmutable::modify()` Date/Time Arithmetic
