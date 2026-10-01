---
id: "en-php-function-datetimeimmutable-setmicrosecond"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::setMicrosecond"
title: "Sets microsecond part of the time"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::setMicrosecond() does not modify the object itself\")] public static DateTimeImmutable::setMicrosecond(int $microsecond)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.setmicrosecond.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets microsecond part of the time

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::setMicrosecond() does not modify the object itself")] public static DateTimeImmutable::setMicrosecond(int $microsecond)
```

Returns a new `DateTimeImmutable` object constructed from the old one, with modified microsecond part.

## Parameters

- **`$microsecond`** — The microsecond value to set (`0` to `999999`).

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Errors/Exceptions

If the `$microsecond` is outside the range [`0`, `999999`], a DateRangeError is thrown.

## Examples

**`DateTimeImmutable::setMicrosecond()` example**

```php


<?php
$date = DateTimeImmutable::createFromTimestamp(123.456789);
echo $date->format('Y-m-d H:i:s.u') . PHP_EOL;
$date = $date->setMicrosecond(987654);
echo $date->format('Y-m-d H:i:s.u') . PHP_EOL;
?>

   
```

The above example will output:

```text


1970-01-01 00:02:03.456789
1970-01-01 00:02:03.987654

   
```

## See Also

 `DateTimeInterface::getMicrosecond()`
