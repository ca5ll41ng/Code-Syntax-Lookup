---
id: "en-php-function-dateperiod-getdateinterval"
language: "php"
lang: "en"
category: "function"
name: "DatePeriod::getDateInterval"
title: "Gets the interval"
signature: "public DateInterval DatePeriod::getDateInterval()"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateperiod.getdateinterval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the interval

## Description

Object-oriented style

```php
public DateInterval DatePeriod::getDateInterval()
```

Gets a `DateInterval` `object` representing the interval used for the period.

## Parameters

This function has no parameters.

## Return Values

Returns a `DateInterval` `object`

## Examples

**`DatePeriod::getDateInterval()` example**

```php


<?php
$period = DatePeriod::createFromIso8601String('R7/2016-05-16T00:00:00Z/P1D');
$interval = $period->getDateInterval();
echo $interval->format('%d day');

   
```

The above example will output:

```text


1 day

   
```

## See Also

 `DatePeriod::getStartDate()` `DatePeriod::getEndDate()`
