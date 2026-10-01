---
id: "en-php-function-datetime-setmicrosecond"
language: "php"
lang: "en"
category: "function"
name: "DateTime::setMicrosecond"
title: "Sets microsecond part of the time"
signature: "public static DateTime::setMicrosecond(int $microsecond)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetime.setmicrosecond.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets microsecond part of the time

## Description

```php
public static DateTime::setMicrosecond(int $microsecond)
```

Sets microsecond part of the time.

Like `DateTimeImmutable::setMicrosecond()` but works with `DateTime`.

## Parameters

- **`$microsecond`** — The microsecond value to set (`0` to `999999`).

## Return Values

Returns the modified `DateTime` object for method chaining.

## Errors/Exceptions

If the `$microsecond` is outside the range [`0`, `999999`], a DateRangeError is thrown.

## Examples

**`DateTime::setMicrosecond()` example**

```php


<?php
$date = DateTime::createFromTimestamp(123.456789);
echo $date->format('Y-m-d H:i:s.u') . PHP_EOL;
$date->setMicrosecond(987654);
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
