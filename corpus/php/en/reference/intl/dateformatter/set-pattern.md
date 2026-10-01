---
id: "en-php-function-intldateformatter-setpattern"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::setPattern"
aliases: ["datefmt_set_pattern"]
title: "Set the pattern used for the IntlDateFormatter"
signature: "public bool IntlDateFormatter::setPattern(string $pattern)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.setpattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the pattern used for the IntlDateFormatter

## Description

Object-oriented style

```php
public bool IntlDateFormatter::setPattern(string $pattern)
```

Procedural style

```php
bool datefmt_set_pattern(IntlDateFormatter $formatter, string $pattern)
```

Set the pattern used for the IntlDateFormatter.

## Parameters

- **`$formatter`** — The formatter resource.
- **`$pattern`** — New pattern string to use. Possible patterns are documented at []().

## Return Values

Returns `true` on success or `false` on failure. Bad formatstrings are usually the cause of the failure.

## Examples

**`datefmt_set_pattern()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'Pattern of the formatter is : ', datefmt_get_pattern($fmt), PHP_EOL;
echo 'First Formatted output with pattern is ', datefmt_format($fmt, 0), PHP_EOL;
datefmt_set_pattern($fmt, 'yyyyMMdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ', datefmt_get_pattern($fmt), PHP_EOL;
echo 'Second Formatted output with pattern is ', datefmt_format($fmt, 0), PHP_EOL;
?>

    
```

**OO example**

```php


<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'Pattern of the formatter is : ', $fmt->getPattern(), PHP_EOL;
echo 'First Formatted output is ', $fmt->format(0), PHP_EOL;
$fmt->setPattern('yyyyMMdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ', $fmt->getPattern(), PHP_EOL;
echo 'Second Formatted output is ', $fmt->format(0), PHP_EOL;
?>

    
```

The above example will output:

```text


Pattern of the formatter is : MM/dd/yyyy
First Formatted output is 12/31/1969
Now pattern of the formatter is : yyyyMMdd hh:mm:ss z
Second Formatted output is 19691231 04:00:00 PST

   
```

## See Also

`datefmt_get_pattern()` `datefmt_create()`
