---
id: "en-php-function-intldateformatter-localtime"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::localtime"
aliases: ["datefmt_localtime"]
title: "Parse string to a field-based time value"
signature: "public array|false IntlDateFormatter::localtime(string $string, int $offset = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.localtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse string to a field-based time value

## Description

Object-oriented style

```php
public array|false IntlDateFormatter::localtime(string $string, int $offset = null)
```

Procedural style

```php
array|false datefmt_localtime(IntlDateFormatter $formatter, string $string, int $offset = null)
```

Converts `$string` to a field-based time value (an array of various fields), starting at `$offset` and consuming as much of the input string as possible.

## Parameters

- **`$formatter`** — The `IntlDateFormatter` object.
- **`$string`** — String to convert to a time.
- **`$offset`** — Position at which to start the parsing in `$string` (zero-based). On return, `$offset` holds the position at which parsing ended, whether or not the parse succeeded. If `$offset` is negative or greater than `strlen($string)`, the parse fails immediately and `$offset` is left unchanged.

## Return Values

An associative array of integers whose keys are those of `localtime()`, with the hour given on a 24-hour clock in `tm_hour` or `false` on failure. Note that `tm_yday` is 1-based here, whereas `localtime()` returns it 0-based.

## Examples

**`datefmt_localtime()` example**

```php


<?php

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);

$arr = datefmt_localtime($fmt, 'Wednesday, December 31, 1969 at 4:00:00 PM Pacific Standard Time', $offset);

echo 'First parsed output is ';
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}

?>

    
```

**OO example**

```php


<?php

$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);

$arr = $fmt->localtime('Wednesday, December 31, 1969 at 4:00:00 PM Pacific Standard Time', $offset);

echo 'First parsed output is ';
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}

?>

    
```

The above example will output:

```text

         
First parsed output is tm_sec : 0 , tm_min : 0 , tm_hour : 16 , tm_year : 69 ,
tm_mday : 31 , tm_wday : 3 , tm_yday : 365 , tm_mon : 11 , tm_isdst : 0 ,

     
```

## See Also

`datefmt_create()` `datefmt_format()` `datefmt_parse()` `datefmt_get_error_code()` `datefmt_get_error_message()`
