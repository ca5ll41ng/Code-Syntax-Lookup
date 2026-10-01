---
id: "en-php-function-datetimeimmutable-createfromformat"
language: "php"
lang: "en"
category: "function"
name: "DateTimeImmutable::createFromFormat"
aliases: ["date_create_immutable_from_format"]
title: "Parses a time string according to a specified format"
signature: "public static DateTimeImmutable|false DateTimeImmutable::createFromFormat(string $format, string $datetime, DateTimeZone|null $timezone = null)"
module: "datetime"
source_url: "https://www.php.net/manual/en/datetimeimmutable.createfromformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses a time string according to a specified format

## Description

Object-oriented style

```php
public static DateTimeImmutable|false DateTimeImmutable::createFromFormat(string $format, string $datetime, DateTimeZone|null $timezone = null)
```

Procedural style

```php
DateTimeImmutable|false date_create_immutable_from_format(string $format, string $datetime, DateTimeZone|null $timezone = null)
```

Returns a new DateTimeImmutable object representing the date and time specified by the `$datetime` string, which was formatted in the given `$format`.

## Parameters

- **`$format`** — The format that the passed in `string` should be in. See the formatting options below. In most cases, the same letters as for the `date()` can be used. — All fields are initialised with the current date/time. In most cases you would want to reset these to "zero" (the Unix epoch, `1970-01-01 00:00:00 UTC`). You do that by including the `!` character as first character in your `$format`, or `|` as your last. Please see the documentation for each character below for more information. — The format is parsed from left to right, which means that in some situations the order in which the format characters are present affects the result. In the case of `z` (the day of the year), it is required that a year has already been parsed, for example through the `Y` or `y` characters. — Letters that are used for parsing numbers allow a wide range of values, outside of what the logical range would be. For example, the `d` (day of the month) accepts values in the range from `00` to `99`. The only constraint is on the amount of digits. The date/time parser's overflow mechanism is used when out-of-range values are given. The examples below show some of this behaviour. — This also means that the data parsed for a format letter is greedy, and will read up to the amount of digits its format allows for. That can then also mean that there are no longer enough characters in the `$datetime` string for following format characters. An example on this page also illustrates this issue. — | `$format` character | Description | Example parsable values | | --- | --- | --- | | *Day* | --- | --- | | `d` and `j` | Day of the month, 2 digits with or without leading zeros | `01` to `31` or `1` to `31`. (2 digit numbers higher than the number of days in the month are accepted, in which case they will make the month overflow. For example using 33 with January, means February 2nd) | | `D` and `l` | A textual representation of a day | `Mon` through `Sun` or `Sunday` through `Saturday`. If the day name given is different than the day name belonging to a parsed (or default) date is different, then an overflow occurs to the *next* date with the given day name. See the examples below for an explanation. | | `S` | English ordinal suffix for the day of the month, 2 characters. It's ignored while processing. | `st`, `nd`, `rd` or `th`. | | `z` | The day of the year (starting from 0); must be preceded by `Y` or `y`. | `0` through `365`. (3 digit numbers higher than the numbers in a year are accepted, in which case they will make the year overflow. For example using 366 with 2022, means January 2nd, 2023) | | *Month* | --- | --- | | `F` and `M` | A textual representation of a month, such as January or Sept | `January` through `December` or `Jan` through `Dec` | | `m` and `n` | Numeric representation of a month, with or without leading zeros | `01` through `12` or `1` through `12`. (2 digit numbers higher than 12 are accepted, in which case they will make the year overflow. For example using 13 means January in the next year) | | *Year* | --- | --- | | `X` and `x` | A full numeric representation of a year, *up to* 19 digits, optionally prefixed by `+` or `-` | Examples: `0055`, `787`, `1999`, `-2003`, `+10191` | | `Y` | A full numeric representation of a year, *up to* 4 digits | Examples: `25` (same as `0025`), `787`, `1999`, `2003` | | `y` | A two digit representation of a year (which is assumed to be in the range 1970-2069, inclusive) | Examples: `99` or `03` (which will be interpreted as `1999` and `2003`, respectively) | | *Time* | --- | --- | | `a` and `A` | Ante meridiem and Post meridiem | `am` or `pm` | | `g` and `h` | 12-hour format of an hour with or without leading zero | `1` through `12` or `01` through `12` (2 digit numbers higher than 12 are accepted, in which case they will make the day overflow. For example using `14` means `02` in the next AM/PM period) | | `G` and `H` | 24-hour format of an hour with or without leading zeros | `0` through `23` or `00` through `23` (2 digit numbers higher than 24 are accepted, in which case they will make the day overflow. For example using `26` means `02:00` the next day) | | `i` | Minutes with leading zeros | `00` to `59`. (2 digit numbers higher than 59 are accepted, in which case they will make the hour overflow. For example using `66` means `:06` the next hour) | | `s` | Seconds, with leading zeros | `00` through `59` (2 digit numbers higher than 59 are accepted, in which case they will make the minute overflow. For example using `90` means `:30` the next minute) | | `v` | Fraction in milliseconds (up to three digits) | Example: `12` (`0.12` seconds), `345` (`0.345` seconds) | | `u` | Fraction in microseconds (up to six digits) | Example: `45` (`0.45` seconds), `654321` (`0.654321` seconds) | | *Timezone* | --- | --- | | `e`, `O`, `p`, `P` and `T` | Timezone identifier, or difference to UTC in hours, or difference to UTC with colon between hours and minutes, or timezone abbreviation | Examples: `UTC`, `GMT`, `Atlantic/Azores` or `+0200` or `+02:00` or `EST`, `MDT` | | *Full Date/Time* | --- | --- | | `U` | Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT) | Example: `1292177455` | | *Whitespace and Separators* | --- | --- | | `` (space) | Zero or more spaces, tabs, NBSP (U+A0), or NNBSP (U+202F) characters | Example: `"\t"`, `" "` | | `#` | One of the following separation symbol: `;`, `:`, `/`, `.`, `,`, `-`, `(` or `)` | Example: `/` | | `;`, `:`, `/`, `.`, `,`, `-`, `(` or `)` | The specified character. | Example: `-` | | `?` | A random byte | Example: `^` (Be aware that for UTF-8 characters you might need more than one `?`. In this case, using `*` is probably what you want instead) | | `*` | Random bytes until the next separator or digit | Example: `*` in `Y-*-d` with the string `2009-aWord-08` will match `aWord` | | `!` | Resets all fields (year, month, day, hour, minute, second, fraction and timezone information) to zero-like values ( `0` for hour, minute, second and fraction, `1` for month and day, `1970` for year and the default timezone) | Without `!,` all fields will be set to the current date and time. | | `\|` | Resets all fields (year, month, day, hour, minute, second, fraction and timezone information) to zero-like values if they have not been parsed yet | `Y-m-d\|` will set the year, month and day to the information found in the string to parse, and sets the hour, minute and second to 0. | | `+` | If this format specifier is present, trailing data in the string will not cause an error, but a warning instead | Use `DateTimeImmutable::getLastErrors()` to find out whether trailing data was present. | — Unrecognized characters in the format string will cause the parsing to fail and an error message is appended to the returned structure. You can query error messages with `DateTimeImmutable::getLastErrors()`. — To include literal characters in `$format`, you have to escape them with a backslash (`\`). — If `$format` does not contain the character `!` then portions of the generated date/time which are not specified in `$format` will be set to the current system time. — If `$format` contains the character `!`, then portions of the generated date/time not provided in `$format`, as well as values to the left-hand side of the `!`, will be set to corresponding values from the Unix epoch. — If any time character is parsed, then all other time-related fields are set to "0", unless also parsed. — The Unix epoch is 1970-01-01 00:00:00 UTC.
- **`$datetime`** — String representing the time.
- **`$timezone`** — A `DateTimeZone` object representing the desired time zone. — If `$timezone` is omitted or `null` and `$datetime` contains no timezone, the current timezone will be used.
  > The `$timezone` parameter and the current timezone are ignored when the `$datetime` parameter either contains a UNIX timestamp (e.g. `946684800`) or specifies a timezone (e.g. `2010-01-28T15:00:00+02:00`).



## Return Values

Returns a new DateTimeImmutable instance or `false` on failure.

## Errors/Exceptions

This method throws ValueError when the `$datetime` contains NULL-bytes.

## Changelog

|  |  |
| --- | --- |
| 8.2.9 | The `` (space) specifier now also supports NBSP (U+A0) and NNBSP (U+202F) characters. |
| 8.2.0 | The `X` and `x` `$format` specifiers have been added. |
| 8.0.21, 8.1.8, 8.2.0 | Now throws ValueError when NULL-bytes are passed into `$datetime`, which previously was silently ignored. |
| 7.3.0 | The `v` `$format` specifier has been added. |

## Examples

**`DateTimeImmutable::createFromFormat()` example**

Object-oriented style

```php


<?php
$date = DateTimeImmutable::createFromFormat('j-M-Y', '15-Feb-2009');
echo $date->format('Y-m-d');

   
```

**Using predefined format constants with `DateTimeImmutable::createFromFormat()`**

Object-oriented style

```php


<?php
$date = DateTimeImmutable::createFromFormat(
    DateTimeInterface::ISO8601,
    '2004-02-12T15:19:21+00:00'
);
echo $date->format('c e') . "\n";

$date = DateTimeImmutable::createFromFormat(
    DateTimeInterface::RFC3339_EXTENDED,
    '2013-10-14T09:00:00.000+02:00'
);
echo $date->format('c e') . "\n";

   
```

The formatting constants as used in this example consist of a string of characters for formatting a `DateTimeImmutable` object. In most cases, these letters match with the same elements of date/time information as the ones defined in the parameters section above, but they tend to be more lenient.

**Intricacies of `DateTimeImmutable::createFromFormat()`**

```php


<?php
echo 'Current time: ' . date('Y-m-d H:i:s') . "\n";

$format = 'Y-m-d';
$date = DateTimeImmutable::createFromFormat($format, '2009-02-15');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = 'Y-m-d H:i:s';
$date = DateTimeImmutable::createFromFormat($format, '2009-02-15 15:16:17');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = 'Y-m-!d H:i:s';
$date = DateTimeImmutable::createFromFormat($format, '2009-02-15 15:16:17');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = '!d';
$date = DateTimeImmutable::createFromFormat($format, '15');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = 'i';
$date = DateTimeImmutable::createFromFormat($format, '15');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

   
```

The above example will output something similar to:

```text


Current time: 2022-06-02 15:50:46
Format: Y-m-d; 2009-02-15 15:50:46
Format: Y-m-d H:i:s; 2009-02-15 15:16:17
Format: Y-m-!d H:i:s; 1970-01-15 15:16:17
Format: !d; 1970-01-15 00:00:00
Format: i; 2022-06-02 00:15:00

   
```

**Format string with literal characters**

```php


<?php
echo DateTimeImmutable::createFromFormat('H\h i\m s\s','23h 15m 03s')->format('H:i:s');

   
```

The above example will output something similar to:

```text


23:15:03

   
```

**Overflow behaviour**

```php


<?php
echo DateTimeImmutable::createFromFormat('Y-m-d H:i:s', '2021-17-35 16:60:97')->format(DateTimeImmutable::RFC2822);

   
```

The above example will output something similar to:

```text


Sat, 04 Jun 2022 17:01:37 +0000

   
```

Although the result looks odd, it is correct, as the following overflows happen:

1. `97` seconds overflows to `1` minute, leaving `37` seconds.
2. `61` minutes overflows to `1` hour, leaving `1` minutes.
3. `35` days overflows to `1` month, leaving `4` days. The amount of days that are left over depends on the month, as not every month has the same amount of days.
4. `18` months overflows to `1` year, leaving `6` months.

**Overflowing day name behaviour**

```php


<?php
$d = DateTime::createFromFormat(DateTimeInterface::RFC1123, 'Mon, 3 Aug 2020 25:00:00 +0000');
echo $d->format(DateTime::RFC1123), "\n";

   
```

The above example will output something similar to:

```text


Mon, 10 Aug 2020 01:00:00 +0000

   
```

Although the result looks odd, it is correct, as the following overflows happen:

1. `3 Aug 2020 25:00:00` overflows to `(Tue) 4 Aug 2020 01:00`.
2. `Mon` gets applied, which advances the date to `Mon, 10 Aug 2020 01:00:00`. The explanation of relative keywords such as `Mon` is explained in the section on relative formats.

In order to detect overflows in dates, you can use `DateTimeImmutable::getLastErrors()`, which will include a warning if an overflow occurred.

**Detecting overflown dates**

```php


<?php
$d = DateTimeImmutable::createFromFormat('Y-m-d H:i:s', '2021-17-35 16:60:97');
echo $d->format(DateTimeImmutable::RFC2822), "\n\n";

var_dump(DateTimeImmutable::getLastErrors());

   
```

The above example will output something similar to:

```text


Sat, 04 Jun 2022 17:01:37 +0000

array(4) {
  'warning_count' =>
  int(2)
  'warnings' =>
  array(1) {
    [19] =>
    string(27) "The parsed date was invalid"
  }
  'error_count' =>
  int(0)
  'errors' =>
  array(0) {
  }
}

   
```

**Greedy parsing behaviour**

```php


<?php
print_r(date_parse_from_format('Gis', '60101'));

   
```

The above example will output something similar to:

```text


Array
(
    [year] =>
    [month] =>
    [day] =>
    [hour] => 60
    [minute] => 10
    [second] => 0
    [fraction] => 0
    [warning_count] => 1
    [warnings] => Array
        (
            [5] => The parsed time was invalid
        )

    [error_count] => 1
    [errors] => Array
        (
            [4] => A two digit second could not be found
        )

    [is_localtime] =>
)

   
```

The `G` format is to parse 24 hour clock hours, with or without leading zero. This requires to parse 1 or 2 digits. Because there are two following digits, it greedily reads this as `60`.

The following `i` and `s` format characters both require two digits. This means that `10` is passed as minute (`i`), and that there are then not enough digits left to parse for as second (`s`).

The `errors` array indicates this problem.

Additionally, an hour of `60` is outside the range `0`-`24`, which causes the `warnings` array to include a warning that the time is invalid.

## See Also

 `DateTimeImmutable::__construct()` `DateTimeImmutable::getLastErrors()` `checkdate()` `strptime()`
