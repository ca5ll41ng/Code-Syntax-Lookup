---
id: "en-php-function-dateperiod-getrecurrences"
language: "php"
lang: "en"
category: "function"
name: "DatePeriod::getRecurrences"
title: "Gets the number of recurrences"
signature: "public int|null DatePeriod::getRecurrences()"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateperiod.getrecurrences.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of recurrences

## Description

Object-oriented style

```php
public int|null DatePeriod::getRecurrences()
```

Get the number of recurrences.

## Parameters

This function has no parameters.

## Return Values

The number of recurrences as set by explicitly passing the `$recurrences` to the constructor of the `DatePeriod` class, or `null` otherwise.

## Examples

**Different values for `DatePeriod::getRecurrences()`**

```php


<?php
$start = new DateTime('2018-12-31 00:00:00');
$end   = new DateTime('2021-12-31 00:00:00');
$interval = new DateInterval('P1M');
$recurrences = 5;

// recurrences explicitly set through the constructor
$period = new DatePeriod($start, $interval, $recurrences, DatePeriod::EXCLUDE_START_DATE);
echo $period->getRecurrences(), "\n";

$period = new DatePeriod($start, $interval, $recurrences);
echo $period->getRecurrences(), "\n";

$period = new DatePeriod($start, $interval, $recurrences, DatePeriod::INCLUDE_END_DATE);
echo $period->getRecurrences(), "\n\n";

// recurrences not set in the constructor
$period = new DatePeriod($start, $interval, $end);
var_dump($period->getRecurrences());

$period = new DatePeriod($start, $interval, $end, DatePeriod::EXCLUDE_START_DATE);
var_dump($period->getRecurrences());

    
```

The above example will output:

```php


5
5
5

NULL
NULL

    
```

## See Also

 DatePeriod::$recurrences
