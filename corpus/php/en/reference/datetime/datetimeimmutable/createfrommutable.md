---
id: "en-php-function-datetimeimmutable-createfrommutable"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::createFromMutable"
title: "Returns new DateTimeImmutable instance encapsulating the given DateTime object"
signature: "public static static DateTimeImmutable::createFromMutable(DateTime $object)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.createfrommutable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns new DateTimeImmutable instance encapsulating the given DateTime object

## Description

```php
public static static DateTimeImmutable::createFromMutable(DateTime $object)
```

## Parameters

- **`$object`** — The mutable `DateTime` object that you want to convert to an immutable version. This object is not modified, but instead a new `DateTimeImmutable` instance is created containing the same date time and timezone information.

## Return Values

Returns a new `DateTimeImmutable` instance.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | The method returns an instance of the currently invoked class now. Previously, it created a new instance of `DateTimeImmutable`. |

## Examples

**Creating an immutable date time object**

```php


<?php
$date = new DateTime("2014-06-20 11:45 Europe/London");
$immutable = DateTimeImmutable::createFromMutable( $date );

    
```
