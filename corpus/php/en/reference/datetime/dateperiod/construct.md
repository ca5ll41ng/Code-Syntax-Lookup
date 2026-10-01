---
id: "en-php-function-dateperiod-construct"
language: "php"
lang: "en"
category: "function"
name: "DatePeriod::__construct"
title: "Creates a new DatePeriod object"
signature: "public DatePeriod::__construct(DateTimeInterface $start, DateInterval $interval, int $recurrences, int $options = 0)"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateperiod.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new DatePeriod object

## Description

```php
public DatePeriod::__construct(DateTimeInterface $start, DateInterval $interval, int $recurrences, int $options = 0)
```

```php
public DatePeriod::__construct(DateTimeInterface $start, DateInterval $interval, DateTimeInterface $end, int $options = 0)
```

> The following constructor variant has been deprecated:
>
> `public` `DatePeriod::__construct()` `string``$isostr` `int``$options`0
>
> This variant of the constructor is deprecated as of PHP 8.4.0, use `DatePeriod::createFromISO8601String()` instead.

Creates a new DatePeriod object.

`DatePeriod` objects can be used as an iterator to generate a number of `DateTimeImmutable` or `DateTime` object from a `$start` date, a `$interval`, and an `$end` date or the number of `$recurrences`.

The class of returned objects is equivalent to the `DateTimeImmutable` or `DateTime` ancestor class of the `$start` object.

## Parameters

- **`$start`** — The start date of the period. Included by default in the result set.
- **`$interval`** — The interval between recurrences within the period.
- **`$recurrences`** — The number of recurrences. The number of returned results is one higher than this, as the start date is included in the result set by default. Must be greater than `0`.
- **`$end`** — The end date of the period. Excluded by default from the result set.
- **`$isostr`** — A subset of the [ISO 8601 repeating interval specification](). — Examples of some ISO 8601 interval specification features that PHP does not support are:
  1. zero occurrences (`R0/`)
  2. time offsets other than UTC (`Z`), such as `+02:00`.


- **`$options`** — A bit field which can be used to control certain behaviour with start- and end- dates. — With `DatePeriod::EXCLUDE_START_DATE` you exclude the start date from the set of recurring dates within the period. — With `DatePeriod::INCLUDE_END_DATE` you include the end date in the set of recurring dates within the period.

## Errors/Exceptions

Throws an `DateMalformedPeriodStringException` when the `$isostr` cannot be parsed as a valid ISO 8601 period. Prior to PHP 8.3, this was Exception.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | The signature using `$isostr` has been deprecated, use `DatePeriod::createFromISO8601String()` instead. |
| 8.3.0 | Now throws DateMalformedPeriodStringException instead of Exception. |
| 8.2.0 | The `DatePeriod::INCLUDE_END_DATE` constant has been added. |
| 7.2.19, 7.3.6, 7.4.0 | `$recurrences` must be greater than `0` now. |

## Examples

**DatePeriod example**

```php


<?php
$start = new DateTime('2012-07-01');
$interval = new DateInterval('P7D');
$end = new DateTime('2012-07-31');
$recurrences = 4;
$iso = 'R4/2012-07-01T00:00:00Z/P7D';

// All of these periods are equivalent.
$period = new DatePeriod($start, $interval, $recurrences);
$period = new DatePeriod($start, $interval, $end);
$period = new DatePeriod($iso);

// By iterating over the DatePeriod object, all of the
// recurring dates within that period are printed.
foreach ($period as $date) {
    echo $date->format('Y-m-d')."\n";
}

    
```

The above example will output:

```text


Deprecated: Calling DatePeriod::__construct(string $isostr, int $options = 0) is deprecated, use DatePeriod::createFromISO8601String() instead in script on line 11
2012-07-01
2012-07-08
2012-07-15
2012-07-22
2012-07-29

    
```

**DatePeriod example with `DatePeriod::EXCLUDE_START_DATE`**

```php


<?php
$start = new DateTime('2012-07-01');
$interval = new DateInterval('P7D');
$end = new DateTime('2012-07-31');

$period = new DatePeriod($start, $interval, $end,
                         DatePeriod::EXCLUDE_START_DATE);

// By iterating over the DatePeriod object, all of the
// recurring dates within that period are printed.
// Note that, in this case, 2012-07-01 is not printed.
foreach ($period as $date) {
    echo $date->format('Y-m-d')."\n";
}

    
```

The above example will output:

```text


2012-07-08
2012-07-15
2012-07-22
2012-07-29

    
```

**DatePeriod example showing all last Thursdays in a year**

```php


<?php
$begin = new DateTime('2021-12-31');
$end = new DateTime('2022-12-31 23:59:59');

$interval = DateInterval::createFromDateString('last thursday of next month');
$period = new DatePeriod($begin, $interval, $end, DatePeriod::EXCLUDE_START_DATE);

foreach ($period as $dt) {
    echo $dt->format('l Y-m-d'), "\n";
}

    
```

The above example will output:

```text


Thursday 2022-01-27
Thursday 2022-02-24
Thursday 2022-03-31
Thursday 2022-04-28
Thursday 2022-05-26
Thursday 2022-06-30
Thursday 2022-07-28
Thursday 2022-08-25
Thursday 2022-09-29
Thursday 2022-10-27
Thursday 2022-11-24
Thursday 2022-12-29

    
```

## Notes

Unbound numbers of repetitions as specified by ISO 8601 section 4.5 "Recurring time interval" are not supported, i.e. neither passing `"R/..."` as `$isostr` nor passing `null` as `$end` would work.
