---
id: "en-php-function-datetimeimmutable-settimezone"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::setTimezone"
title: "Sets the time zone"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::setTimezone() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::setTimezone(DateTimeZone $timezone)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.settimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the time zone

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::setTimezone() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::setTimezone(DateTimeZone $timezone)
```

Returns a new DateTimeImmutable object with a new timezone set.

## Parameters

- **`$timezone`** — A `DateTimeZone` object representing the desired time zone.

## Return Values

Returns a new modified `DateTimeImmutable` object for method chaining. The underlying point-in-time is not changed when calling this method.

## Examples

**`DateTimeImmutable::setTimeZone()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable('2000-01-01', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

$newDate = $date->setTimezone(new DateTimeZone('Pacific/Chatham'));
echo $newDate->format('Y-m-d H:i:sP') . "\n";
?>

   
```

The above example will output:

```text


2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45

   
```

## See Also

 `DateTimeImmutable::getTimezone()` `DateTimeZone::__construct()`
