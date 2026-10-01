---
id: "en-php-function-dateperiod-getenddate"
language: "php"
lang: "en"
category: "function"
name: "DatePeriod::getEndDate"
title: "Gets the end date"
signature: "public DateTimeInterface|null DatePeriod::getEndDate()"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateperiod.getenddate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the end date

## Description

Object-oriented style

```php
public DateTimeInterface|null DatePeriod::getEndDate()
```

Gets the end date of the period.

## Parameters

This function has no parameters.

## Return Values

Returns `null` if the `DatePeriod` does not have an end date. For example, when initialized with the `$recurrences` parameter, or the `$isostr` parameter without an end date.

Returns a `DateTimeImmutable` `object` when the `DatePeriod` is initialized with a `DateTimeImmutable` `object` as the `$end` parameter.

Returns a cloned `DateTime` `object` representing the end date otherwise.

## Examples

**`DatePeriod::getEndDate()` example**

```php


<?php
$period = new DatePeriod(
    new DateTime('2016-05-16T00:00:00Z'),
    new DateInterval('P1D'),
    new DateTime('2016-05-20T00:00:00Z')
);
$start = $period->getEndDate();
echo $start->format(DateTime::ISO8601);

   
```

The above examples will output:

```text


2016-05-20T00:00:00+0000

   
```

**`DatePeriod::getEndDate()` without an end date**

```php


<?php
$period = new DatePeriod(
    new DateTime('2016-05-16T00:00:00Z'),
    new DateInterval('P1D'),
    7
);
var_dump($period->getEndDate());

   
```

The above example will output:

```text


NULL

   
```

## See Also

 `DatePeriod::getStartDate()` `DatePeriod::getDateInterval()`
