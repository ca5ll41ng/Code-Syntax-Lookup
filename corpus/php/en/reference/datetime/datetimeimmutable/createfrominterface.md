---
id: "en-php-function-datetimeimmutable-createfrominterface"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::createFromInterface"
title: "Returns new DateTimeImmutable object encapsulating the given DateTimeInterface object"
signature: "public static DateTimeImmutable DateTimeImmutable::createFromInterface(DateTimeInterface $object)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.createfrominterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns new DateTimeImmutable object encapsulating the given DateTimeInterface object

## Description

```php
public static DateTimeImmutable DateTimeImmutable::createFromInterface(DateTimeInterface $object)
```

## Parameters

- **`$object`** — The `DateTimeInterface` object that needs to be converted to an immutable version. This object is not modified, but instead a new `DateTimeImmutable` object is created containing the same date, time, and timezone information.

## Return Values

Returns a new `DateTimeImmutable` instance.

## Examples

**Creating an immutable date time object**

```php


<?php
$date = new DateTime("2014-06-20 11:45 Europe/London");
$immutable = DateTimeImmutable::createFromInterface($date);

$date = new DateTimeImmutable("2014-06-20 11:45 Europe/London");
$also_immutable = DateTimeImmutable::createFromInterface($date);

    
```
