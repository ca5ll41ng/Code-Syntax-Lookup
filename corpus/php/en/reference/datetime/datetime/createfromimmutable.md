---
id: "en-php-function-datetime-createfromimmutable"
language: "php"
lang: "en"
category: "function"
name: "DateTime::createFromImmutable"
title: "Returns new DateTime instance encapsulating the given DateTimeImmutable object"
signature: "public static static DateTime::createFromImmutable(DateTimeImmutable $object)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetime.createfromimmutable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns new DateTime instance encapsulating the given DateTimeImmutable object

## Description

```php
public static static DateTime::createFromImmutable(DateTimeImmutable $object)
```

## Parameters

- **`$object`** — The immutable `DateTimeImmutable` object that needs to be converted to a mutable version. This object is not modified, but instead a new `DateTime` instance is created containing the same date, time, and timezone information.

## Return Values

Returns a new `DateTime` instance.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | The method returns an instance of the currently invoked class now. Previously, it created a new instance of `DateTime`. |

## Examples

**Creating a mutable date time object**

```php


<?php
$date = new DateTimeImmutable("2014-06-20 11:45 Europe/London");
$mutable = DateTime::createFromImmutable( $date );

    
```
