---
id: "en-php-function-datetime-createfrominterface"
language: "php"
lang: "en"
category: "function"
name: "DateTime::createFromInterface"
title: "Returns new DateTime object encapsulating the given DateTimeInterface object"
signature: "public static DateTime DateTime::createFromInterface(DateTimeInterface $object)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetime.createfrominterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns new DateTime object encapsulating the given DateTimeInterface object

## Description

```php
public static DateTime DateTime::createFromInterface(DateTimeInterface $object)
```

## Parameters

- **`$object`** — The `DateTimeInterface` object that needs to be converted to a mutable version. This object is not modified, but instead a new `DateTime` object is created containing the same date, time, and timezone information.

## Return Values

Returns a new `DateTime` instance.

## Examples

**Creating a mutable date time object**

```php


<?php
$date = new DateTimeImmutable("2014-06-20 11:45 Europe/London");
$mutable = DateTime::createFromInterface($date);

$date = new DateTime("2014-06-20 11:45 Europe/London");
$also_mutable = DateTime::createFromInterface($date);

    
```
