---
id: "en-php-function-datetimeimmutable-settimestamp"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::setTimestamp"
title: "Sets the date and time based on a Unix timestamp"
signature: "#[\\NoDiscard(message: \"as DateTimeImmutable::setTimestamp() does not modify the object itself\")] public DateTimeImmutable DateTimeImmutable::setTimestamp(int $timestamp)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.settimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the date and time based on a Unix timestamp

## Description

```php
#[\NoDiscard(message: "as DateTimeImmutable::setTimestamp() does not modify the object itself")] public DateTimeImmutable DateTimeImmutable::setTimestamp(int $timestamp)
```

Returns a new `DateTimeImmutable` object constructed from the old one, with the date and time set based on an Unix timestamp.

## Parameters

- **`$timestamp`** — Unix timestamp representing the date. Setting timestamps outside the range of `integer` is possible by using `DateTimeImmutable::modify()` with the `@` format.

## Return Values

Returns a new `DateTimeImmutable` object with the modified data.

## Examples

**`DateTimeImmutable::setTimestamp()` example**

Object-oriented style

```php


<?php
$date = new DateTimeImmutable();
echo $date->format('U = Y-m-d H:i:s') . "\n";

$newDate = $date->setTimestamp(1171502725);
echo $newDate->format('U = Y-m-d H:i:s') . "\n";

   
```

The above example will output something similar to:

```text


1272508903 = 2010-04-28 22:41:43
1171502725 = 2007-02-14 20:25:25

   
```

## See Also

 `DateTimeImmutable::getTimestamp()` `DateTimeImmutable::setMicrosecond()`
