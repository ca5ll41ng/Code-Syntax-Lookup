---
id: "en-php-function-dateinterval-format"
language: "php"
lang: "en"
category: "function"
name: "DateInterval::format"
title: "Formats the interval"
signature: "public string DateInterval::format(string $format)"
module: "datetime"
source_url: "https://www.php.net/manual/en/dateinterval.format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Formats the interval

## Description

```php
public string DateInterval::format(string $format)
```

Formats the interval.

## Parameters

- **`$format`** — | `$format` character | Description | Example values | | --- | --- | --- | | `%` | Literal `%` | `%` | | `Y` | Years, numeric, at least 2 digits with leading 0 | `01`, `03` | | `y` | Years, numeric | `1`, `3` | | `M` | Months, numeric, at least 2 digits with leading 0 | `01`, `03`, `12` | | `m` | Months, numeric | `1`, `3`, `12` | | `D` | Days, numeric, at least 2 digits with leading 0 | `01`, `03`, `31` | | `d` | Days, numeric | `1`, `3`, `31` | | `a` | Total number of days as a result of a `DateTime::diff()` or `(unknown)` otherwise | `4`, `18`, `8123` | | `H` | Hours, numeric, at least 2 digits with leading 0 | `01`, `03`, `23` | | `h` | Hours, numeric | `1`, `3`, `23` | | `I` | Minutes, numeric, at least 2 digits with leading 0 | `01`, `03`, `59` | | `i` | Minutes, numeric | `1`, `3`, `59` | | `S` | Seconds, numeric, at least 2 digits with leading 0 | `01`, `03`, `57` | | `s` | Seconds, numeric | `1`, `3`, `57` | | `F` | Microseconds, numeric, at least 6 digits with leading 0 | `007701`, `052738`, `428291` | | `f` | Microseconds, numeric | `7701`, `52738`, `428291` | | `R` | Sign "`-`" when negative, "`+`" when positive | `-`, `+` | | `r` | Sign "`-`" when negative, empty when positive | `-`, `` |

## Return Values

Returns the formatted interval.

## Changelog

|  |  |
| --- | --- |
| 7.2.12 | The `F` and `f` format will now always be positive. |
| 7.1.0 | The `F` and `f` format characters were added. |

## Examples

**`DateInterval` example**

```php

     
<?php
$interval = new DateInterval('P2Y4DT6H8M');
echo $interval->format('%d days');

    
```

The above example will output:

```php

     
4 days

    
```

**`DateInterval` and carry over points**

```php

     
<?php
$interval = new DateInterval('P32D');
echo $interval->format('%d days');

    
```

The above example will output:

```php

     
32 days

    
```

**`DateInterval` and `DateTime::diff()` with the %a and %d modifiers**

```php

     
<?php
$january = new DateTime('2010-01-01');
$february = new DateTime('2010-02-01');
$interval = $february->diff($january);

// %a will output the total number of days.
echo $interval->format('%a total days')."\n";

// While %d will only output the number of days not already covered by the
// month.
echo $interval->format('%m month, %d days');

    
```

The above example will output:

```php

     
31 total days
1 month, 0 days

    
```

## Notes

> The `DateInterval::format()` method does not recalculate carry over points in time strings nor in date segments. This is expected because it is not possible to overflow values like `"32 days"` which could be interpreted as anything from `"1 month and 4 days"` to `"1 month and 1 day"`.

## See Also

`DateTime::diff()`
