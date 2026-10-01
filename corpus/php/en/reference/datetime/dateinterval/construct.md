---
id: "en-php-function-dateinterval-construct"
language: "php"
lang: "en"
category: "function"
name: "DateInterval::__construct"
title: "Creates a new DateInterval object"
signature: "public DateInterval::__construct(string $duration)"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateinterval.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new DateInterval object

## Description

```php
public DateInterval::__construct(string $duration)
```

Creates a new DateInterval object.

## Parameters

- **`$duration`** — An interval specification. — The format starts with the letter `P`, for period. Each duration period is represented by an integer value followed by a period designator. If the duration contains time elements, that portion of the specification is preceded by the letter `T`. — | Period Designator | Description | | --- | --- | | `Y` | years | | `M` | months | | `D` | days | | `W` | weeks. Converted into days. Prior to PHP 8.0.0, can not be combined with `D`. | | `H` | hours | | `M` | minutes | | `S` | seconds | — Here are some simple examples. Two days is `P2D`. Two seconds is `PT2S`. Six years and five minutes is `P6YT5M`.
  > The unit types must be entered from the largest scale unit on the left to the smallest scale unit on the right. So years before months, months before days, days before minutes, etc. Thus one year and four days must be represented as `P1Y4D`, not `P4D1Y`.

 — The specification can also be represented as a date time. A sample of one year and four days would be `P0001-00-04T00:00:00`. But the values in this format can not exceed a given period's roll-over-point (e.g. `25` hours is invalid). — These formats are based on the [ISO 8601 duration specification]().

## Errors/Exceptions

Throws an `DateMalformedIntervalStringException` when the `$duration` cannot be parsed as an interval. Prior to PHP 8.3, this was Exception.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Now throws DateMalformedIntervalStringException instead of Exception. |
| 8.2.0 | Only the `y` to `f`, `invert`, and `days` will be visible, including a new `from_string` boolean property. |
| 8.0.0 | `W` can be combined with `D`. |

## Examples

**Constructing and using `DateInterval` objects**

```php


<?php
// Create a specific date
$someDate = \DateTime::createFromFormat("Y-m-d H:i", "2022-08-25 14:18");

// Create interval
$interval = new \DateInterval("P7D");

// Add interval
$someDate->add($interval);

// Convert interval to string
echo $interval->format("%d");

    
```

The above example will output:

```php


7

    
```

**`DateInterval` example**

```php


<?php
$interval = new DateInterval('P1W2D');
var_dump($interval);

    
```

Output of the above example in PHP 8.2:

```php


object(DateInterval)#1 (10) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(9)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["from_string"]=>
  bool(false)
}

    
```

Output of the above example in PHP 8:

```php


object(DateInterval)#1 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(9)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["weekday"]=>
  int(0)
  ["weekday_behavior"]=>
  int(0)
  ["first_last_day_of"]=>
  int(0)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["special_type"]=>
  int(0)
  ["special_amount"]=>
  int(0)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(0)
}

    
```

Output of the above example in PHP 7:

```php

     
object(DateInterval)#1 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(2)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["weekday"]=>
  int(0)
  ["weekday_behavior"]=>
  int(0)
  ["first_last_day_of"]=>
  int(0)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["special_type"]=>
  int(0)
  ["special_amount"]=>
  int(0)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(0)
}

    
```

## See Also

`DateInterval::format()` `DateTime::add()` `DateTime::sub()` `DateTime::diff()`
