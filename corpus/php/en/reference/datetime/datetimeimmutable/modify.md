---
id: "en-php-function-datetimeimmutable-modify"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::modify"
title: "Creates a new object with modified timestamp"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::modify() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::modify(string $modifier)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.modify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new object with modified timestamp

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::modify() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::modify(string $modifier)
```

Creates a new `DateTimeImmutable` object with modified timestamp. The original object is not modified.

## Parameters

- **`$modifier`** — A date/time string. Valid formats are explained in Date and Time Formats.

## Return Values

Returns `DateTimeImmutable` on success. Procedural style returns `false` on failure.

## Errors/Exceptions

If an invalid Date/Time string is passed, DateMalformedStringException is thrown. Previous to PHP 8.3, this was a warning.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now has a tentative return type of `DateTimeImmutable`. Previously it was `DateTimeImmutable\|false`. |
| 8.3.0 | `DateTimeImmutable::modify()` now throws DateMalformedStringException if an invalid string is passed. Previously, it returned `false`, and a warning was emitted. |

## Examples

**`DateTimeImmutable::modify()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable('2006-12-12');
$newDate = $date->modify('+1 day');
echo $newDate->format('Y-m-d');

   
```

The above example will output:

```text


2006-12-13

   
```

**Beware when adding or subtracting months**

```php


<?php
$date = new DateTimeImmutable('2000-12-31');

$newDate1 = $date->modify('+1 month');
echo $newDate1->format('Y-m-d') . "\n";

$newDate2 = $newDate1->modify('+1 month');
echo $newDate2->format('Y-m-d') . "\n";

   
```

The above example will output:

```text


2001-01-31
2001-03-03

   
```

## See Also

 `DateTimeImmutable::add()` `DateTimeImmutable::sub()` `DateTimeImmutable::setDate()` `DateTimeImmutable::setISODate()` `DateTimeImmutable::setTime()` `DateTimeImmutable::setTimestamp()`
