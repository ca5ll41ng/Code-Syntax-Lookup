---
id: "en-php-function-datetimeimmutable-settime"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::setTime"
title: "Sets the time"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::setTime() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::setTime(int $hour, int $minute, int $second = 0, int $microsecond = 0)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.settime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the time

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::setTime() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::setTime(int $hour, int $minute, int $second = 0, int $microsecond = 0)
```

Returns a new DateTimeImmutable object with the time set to the given time.

## Parameters

- **`$hour`** — Hour of the time.
- **`$minute`** — Minute of the time.
- **`$second`** — Second of the time.
- **`$microsecond`** — Microsecond of the time.

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The behaviour with double existing hours (during the fall-back DST transition) changed. Previously PHP would pick the second occurrence (after the DST transition), instead of the first occurrence (before DST transition). |
| 7.1.0 | The `$microsecond` parameter was added. |

## Examples

**`DateTimeImmutable::setTime()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable('2001-01-01');

$newDate = $date->setTime(14, 55);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(14, 55, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>

   
```

The above example will output something similar to:

```text


2001-01-01 14:55:00
2001-01-01 14:55:24

   
```

**Values exceeding ranges are added to their parent values**

```php


<?php
$date = new DateTimeImmutable('2001-01-01');

$newDate = $date->setTime(14, 55, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(14, 55, 65);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(14, 65, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(25, 55, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>

   
```

The above example will output:

```text


2001-01-01 14:55:24
2001-01-01 14:56:05
2001-01-01 15:05:24
2001-01-02 01:55:24

   
```

## See Also

 `DateTimeImmutable::setDate()` `DateTimeImmutable::setISODate()`
