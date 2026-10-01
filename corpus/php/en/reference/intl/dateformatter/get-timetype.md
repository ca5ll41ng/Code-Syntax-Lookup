---
id: "en-php-function-intldateformatter-gettimetype"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getTimeType"
aliases: ["datefmt_get_timetype"]
title: "Get the timetype used for the IntlDateFormatter"
signature: "public int|false IntlDateFormatter::getTimeType()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.gettimetype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the timetype used for the IntlDateFormatter

## Description

Object-oriented style

```php
public int|false IntlDateFormatter::getTimeType()
```

Procedural style

```php
int|false datefmt_get_timetype(IntlDateFormatter $formatter)
```

Return time type used by the formatter.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

The current date type value of the formatter, or `false` on failure.

## Examples

**`datefmt_get_timetype()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'timetype of the formatter is : ' . datefmt_get_timetype($fmt);
echo 'First Formatted output with timetype is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::SHORT,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Now timetype of the formatter is : ' . datefmt_get_timetype($fmt);
echo 'Second Formatted output with timetype is ' . datefmt_format($fmt, 0);

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
echo 'timetype of the formatter is : ' . $fmt->getTimeType();
echo 'First Formatted output is ' . $fmt->format(0);

$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::SHORT,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Now timetype of the formatter is : ' . $fmt->getTimeType();
echo 'Second Formatted output is ' . $fmt->format(0);

?>

    
```

The above example will output:

```text


timetype of the formatter is : 0
First Formatted output is Wednesday, December 31, 1969 4:00:00 PM PT
Now timetype of the formatter is : 3
Second Formatted output is Wednesday, December 31, 1969 4:00 PM

  
```

## See Also

`datefmt_get_datetype()` `datefmt_create()`
