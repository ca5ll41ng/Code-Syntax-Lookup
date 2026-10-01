---
id: "en-php-function-intldateformatter-getdatetype"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getDateType"
aliases: ["datefmt_get_datetype"]
title: "Get the datetype used for the IntlDateFormatter"
signature: "public int|false IntlDateFormatter::getDateType()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.getdatetype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the datetype used for the IntlDateFormatter

## Description

Object-oriented style

```php
public int|false IntlDateFormatter::getDateType()
```

Procedural style

```php
int|false datefmt_get_datetype(IntlDateFormatter $formatter)
```

Returns date type used by the formatter.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

The current date type value of the formatter, or `false` on failure.

## Examples

**`datefmt_get_datetype()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'datetype of the formatter is : ' . datefmt_get_datetype($fmt);
echo 'First Formatted output with datetype is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::SHORT,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Now datetype of the formatter is : ' . datefmt_get_datetype($fmt);
echo 'Second Formatted output with datetype is ' . datefmt_format($fmt, 0);

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
echo 'datetype of the formatter is : ' . $fmt->getDateType();
echo 'First Formatted output is ' . $fmt->format(0);
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::SHORT,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Now datetype of the formatter is : ' . $fmt->getDateType();
echo 'Second Formatted output is ' . $fmt->format(0);

?>

    
```

The above example will output:

```text

         
datetype of the formatter is : 0
First Formatted output is Wednesday, December 31, 1969 4:00:00 PM PT
Now datetype of the formatter is : 2
Second Formatted output is 12/31/69 4:00:00 PM PT

     
```

## See Also

`datefmt_get_timetype()` `datefmt_create()`
