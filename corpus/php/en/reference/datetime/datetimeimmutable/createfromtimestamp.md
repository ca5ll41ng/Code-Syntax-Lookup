---
id: "en-php-function-datetimeimmutable-createfromtimestamp"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::createFromTimestamp"
title: "Creates an instance from a Unix timestamp"
signature: "public static static DateTimeImmutable::createFromTimestamp(int|float $timestamp)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.createfromtimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an instance from a Unix timestamp

## Description

```php
public static static DateTimeImmutable::createFromTimestamp(int|float $timestamp)
```

Creates an instance from a Unix timestamp.

## Parameters

- **`$timestamp`** — Unix timestamp representing the date. A `float` value is also accepted which allows for microsecond precision.

## Return Values

Returns a new `DateTimeImmutable` instance.

## Errors/Exceptions

If the `$timestamp` is outside the range [`PHP_INT_MIN`, `PHP_INT_MAX`], a DateRangeError is thrown.

## Examples

**`DateTimeImmutable::createFromTimestamp()` example**

```php


<?php
$date = DateTimeImmutable::createFromTimestamp(123.456789);
echo $date->format('Y-m-d H:i:s.u');
?>

   
```

The above example will output:

```text


1970-01-01 00:02:03.456789

   
```
