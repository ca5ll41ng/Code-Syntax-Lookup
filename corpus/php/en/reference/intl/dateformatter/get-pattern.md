---
id: "en-php-function-intldateformatter-getpattern"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getPattern"
aliases: ["datefmt_get_pattern"]
title: "Get the pattern used for the IntlDateFormatter"
signature: "public string|false IntlDateFormatter::getPattern()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.getpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the pattern used for the IntlDateFormatter

## Description

Object-oriented style

```php
public string|false IntlDateFormatter::getPattern()
```

Procedural style

```php
string|false datefmt_get_pattern(IntlDateFormatter $formatter)
```

Get pattern used by the formatter.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

The pattern string being used to format/parse, or `false` on failure.

## Examples

**`datefmt_get_pattern()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'pattern of the formatter is : ' . datefmt_get_pattern($fmt);
echo 'First Formatted output with pattern is ' . datefmt_format($fmt, 0);
datefmt_set_pattern($fmt,'yyyymmdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ' . datefmt_get_pattern($fmt);
echo 'Second Formatted output with pattern is ' . datefmt_format($fmt, 0);

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
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'pattern of the formatter is : ' . $fmt->getPattern();
echo 'First Formatted output is ' . $fmt->format(0);
$fmt->setPattern('yyyymmdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ' . $fmt->getPattern();
echo 'Second Formatted output is ' . $fmt->format(0);
?>

    
```

The above example will output:

```text


pattern of the formatter is : MM/dd/yyyy
First Formatted output is 12/31/1969
Now pattern of the formatter is : yyyymmdd hh:mm:ss z
Second Formatted output is 19690031 04:00:00 PST

  
```

## See Also

`datefmt_set_pattern()` `datefmt_create()`
