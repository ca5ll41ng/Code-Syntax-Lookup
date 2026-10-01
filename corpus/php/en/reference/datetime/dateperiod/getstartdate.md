---
id: "en-php-function-dateperiod-getstartdate"
language: "php"
lang: "en"
category: "function"
name: "DatePeriod::getStartDate"
title: "Gets the start date"
signature: "public DateTimeInterface DatePeriod::getStartDate()"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateperiod.getstartdate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the start date

## Description

Object-oriented style

```php
public DateTimeInterface DatePeriod::getStartDate()
```

Gets the start date of the period.

## Parameters

This function has no parameters.

## Return Values

Returns a `DateTimeImmutable` `object` when the `DatePeriod` is initialized with a `DateTimeImmutable` `object` as the `$start` parameter.

Returns a `DateTime` `object` otherwise.

## Examples

**`DatePeriod::getStartDate()` example**

```php


<?php
$period = DatePeriod::createFromIso8601String('R7/2016-05-16T00:00:00Z/P1D');
$start = $period->getStartDate();
echo $start->format(DateTime::ISO8601);

   
```

The above example will output:

```text


2016-05-16T00:00:00+0000

   
```

## See Also

 `DatePeriod::getEndDate()` `DatePeriod::getDateInterval()`
