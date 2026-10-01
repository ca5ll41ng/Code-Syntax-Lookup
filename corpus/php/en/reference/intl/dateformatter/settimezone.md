---
id: "en-php-function-intldateformatter-settimezone"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::setTimeZone"
aliases: ["datefmt_set_timezone"]
title: "Sets formatterʼs timezone"
signature: "public bool IntlDateFormatter::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.settimezone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets formatterʼs timezone

## Description

Object-oriented style

```php
public bool IntlDateFormatter::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone)
```

Procedural style

```php
bool datefmt_set_timezone(IntlDateFormatter $formatter, IntlTimeZone|DateTimeZone|string|null $timezone)
```

Sets the timezone used for the IntlDateFormatter. object.

## Parameters

- **`$formatter`** — The formatter resource.
- **`$timezone`** — The timezone to use for this formatter. This can be specified in the following forms:

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | This function now returns `true` on success; previously it returns `null`. |

## Examples

**`IntlDateFormatter::setTimeZone()` examples**

```php


<?php
ini_set('date.timezone', 'Europe/Amsterdam');

$formatter = IntlDateFormatter::create(NULL, NULL, NULL, "UTC");

$formatter->setTimeZone(NULL);
echo "NULL\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone(IntlTimeZone::createTimeZone('Europe/Lisbon'));
echo "IntlTimeZone\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone(new DateTimeZone('Europe/Paris'));
echo "DateTimeZone\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone('Europe/Rome');
echo "String\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone('GMT+00:30');
print_r($formatter->getTimeZone());


    
```

The above example will output:

```text


NULL
    Europe/Amsterdam
IntlTimeZone
    Europe/Lisbon
DateTimeZone
    Europe/Paris
String
    Europe/Rome
IntlTimeZone Object
(
    [valid] => 1
    [id] => GMT+00:30
    [rawOffset] => 1800000
    [currentOffset] => 1800000
)


    
```

## See Also

`IntlDateFormatter::getTimeZone()`
