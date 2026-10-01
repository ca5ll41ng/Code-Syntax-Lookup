---
id: "en-php-function-function-date-parse-from-format"
language: "php"
lang: "en"
category: "function"
name: "date_parse_from_format"
title: "Get info about given date formatted according to the specified format"
signature: "array date_parse_from_format(string $format, string $datetime)"
module: "datetime"
source_url: "https://www.php.net/manual/en/function.date-parse-from-format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get info about given date formatted according to the specified format

## Description

```php
array date_parse_from_format(string $format, string $datetime)
```

Returns associative array with detailed info about given date/time.

## Parameters

- **`$format`** — Documentation on how the `$format` is used, please refer to the documentation of `DateTimeImmutable::createFromFormat()`. The same rules apply.
- **`$datetime`** — String representing the date/time.

## Return Values

 See also Returns <constant>true</constant> on success or <constant>false</constant> on failure. 

Returns associative array with detailed info about given date/time.

The returned array has keys for `year`, `month`, `day`, `hour`, `minute`, `second`, `fraction`, and `is_localtime`.

If `is_localtime` is present then `zone_type` indicates the type of timezone. For type `1` (UTC offset) the `zone`, `is_dst` fields are added; for type `2` (abbreviation) the fields `tz_abbr`, `is_dst` are added; and for type `3` (timezone identifier) the `tz_abbr`, `tz_id` are added.

The array includes `warning_count` and `warnings` fields. The first one indicate how many warnings there were. The keys of elements `warnings` array indicate the position in the given `$datetime` where the warning occurred, with the string value describing the warning itself. An example below shows such a warning.

The array also contains `error_count` and `errors` fields. The first one indicate how many errors were found. The keys of elements `errors` array indicate the position in the given `$datetime` where the error occurred, with the string value describing the error itself. An example below shows such an error.

> The number of array elements in the `warnings` and `errors` arrays might be less than `warning_count` or `error_count` if they occurred at the same position.

## Errors/Exceptions

This functions throws ValueError when the `$datetime` contains NULL-bytes.

## Changelog

|  |  |
| --- | --- |
| 8.0.21, 8.1.8, 8.2.0 | Now throws ValueError when NULL-bytes are passed into `$datetime`, which previously was silently ignored. |
| 7.2.0 | The `zone` element of the returned array represents seconds instead of minutes now, and its sign is inverted. For instance `-120` is now `7200`. |

## Examples

**`date_parse_from_format()` example**

```php


<?php
$date = "6.1.2009 13:00+01:00";
print_r(date_parse_from_format("j.n.Y H:iP", $date));

    
```

The above example will output:

```text


Array
(
    [year] => 2009
    [month] => 1
    [day] => 6
    [hour] => 13
    [minute] => 0
    [second] => 0
    [fraction] => 0
    [warning_count] => 0
    [warnings] => Array
        (
        )

    [error_count] => 0
    [errors] => Array
        (
        )

    [is_localtime] => 1
    [zone_type] => 1
    [zone] => 3600
    [is_dst] =>
)

    
```

**`date_parse_from_format()` with warnings example**

```php


<?php
$date = "26 August 2022 22:30 pm";
$parsed = date_parse_from_format("j F Y G:i a", $date);

echo "Warnings count: ", $parsed['warning_count'], "\n";
foreach ($parsed['warnings'] as $position => $message) {
    echo "\tOn position {$position}: {$message}\n";
}

    
```

The above example will output:

```text


Warnings count: 1
	On position 23: The parsed time was invalid

    
```

**`date_parse_from_format()` with errors example**

```php


<?php
$date = "26 August 2022 CEST";
$parsed = date_parse_from_format("j F Y H:i", $date);

echo "Errors count: ", $parsed['error_count'], "\n";
foreach ($parsed['errors'] as $position => $message) {
    echo "\tOn position {$position}: {$message}\n";
}

    
```

The above example will output:

```text


Errors count: 3
	On position 15: A two digit hour could not be found
	On position 19: Not enough data available to satisfy format

    
```

## See Also

`DateTimeImmutable::createFromFormat()` `checkdate()`
