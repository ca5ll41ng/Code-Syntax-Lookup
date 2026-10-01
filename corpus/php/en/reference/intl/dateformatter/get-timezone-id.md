---
id: "en-php-function-intldateformatter-gettimezoneid"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::getTimeZoneId"
aliases: ["datefmt_get_timezone_id"]
title: "Get the timezone-id used for the IntlDateFormatter"
signature: "public string|false IntlDateFormatter::getTimeZoneId()"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.gettimezoneid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the timezone-id used for the IntlDateFormatter

## Description

Object-oriented style

```php
public string|false IntlDateFormatter::getTimeZoneId()
```

Procedural style

```php
string|false datefmt_get_timezone_id(IntlDateFormatter $formatter)
```

Get the timezone-id used for the IntlDateFormatter.

## Parameters

- **`$formatter`** — The formatter resource.

## Return Values

ID string for the time zone used by this formatter, or `false` on failure.

## Examples

**`datefmt_get_timezone_id()` example**

```php


<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'timezone_id of the formatter is: ' . datefmt_get_timezone_id($fmt) . "\n";
datefmt_set_timezone($fmt, 'Europe/Madrid');
echo 'Now timezone_id of the formatter is: ' . datefmt_get_timezone_id($fmt);

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
echo 'timezone_id of the formatter is: ' . $fmt->getTimezoneId() . "\n";
$fmt->setTimezone('Europe/Madrid');
echo 'Now timezone_id of the formatter is: ' . $fmt->getTimezoneId();

?>

    
```

The above example will output:

```text


timezone_id of the formatter is: America/Los_Angeles
Now timezone_id of the formatter is: Europe/Madrid

  
```

## See Also

`datefmt_set_timezone()` `datefmt_create()`
