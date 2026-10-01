---
id: "en-php-function-datetimeimmutable-sub"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::sub"
title: "Subtracts an amount of days, months, years, hours, minutes and seconds"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::sub() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::sub(DateInterval $interval)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.sub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Subtracts an amount of days, months, years, hours, minutes and seconds

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::sub() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::sub(DateInterval $interval)
```

Returns a new `DateTimeImmutable` object, with the specified `DateInterval` object subtracted from the specified DateTimeImmutable object.

## Parameters

- **`$interval`** — A `DateInterval` object

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Errors/Exceptions

If an unsupported operation is attempted, such as using a `DateInterval` object representing relative time specifications such as `next weekday`, a DateInvalidOperationException is thrown.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Now throws a DateInvalidOperationException instead of a warning when an unsupported operation is attempted. |

## Examples

**`DateTimeImmutable::sub()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable('2000-01-20');
$newDate = $date->sub(new DateInterval('P10D'));
echo $newDate->format('Y-m-d') . "\n";
?>

   
```

The above example will output:

```text


2000-01-10

   
```

**Further `DateTimeImmutable::sub()` examples**

```php


<?php
$date = new DateTimeImmutable('2000-01-20');
$newDate = $date->sub(new DateInterval('PT10H30S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";

$date = new DateTimeImmutable('2000-01-20');
$newDate = $date->sub(new DateInterval('P7Y5M4DT4H3M2S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>

   
```

The above example will output:

```text


2000-01-19 13:59:30
1992-08-15 19:56:58

   
```

**Beware when subtracting months**

```php


<?php
$date = new DateTimeImmutable('2001-04-30');
$interval = new DateInterval('P1M');

$newDate1 = $date->sub($interval);
echo $newDate1->format('Y-m-d') . "\n";

$newDate2 = $newDate1->sub($interval);
echo $newDate2->format('Y-m-d') . "\n";
?>

   
```

The above example will output:

```text


2001-03-30
2001-03-02

   
```

## See Also

 `DateTimeImmutable::add()` `DateTimeImmutable::diff()` `DateTimeImmutable::modify()` Date/Time Arithmetic
