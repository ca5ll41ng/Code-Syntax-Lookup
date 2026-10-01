---
id: "en-php-function-intlcalendar-geterrormessage"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getErrorMessage"
aliases: ["intlcal_get_error_message"]
title: "Get last error message on the object"
signature: "public string|false IntlCalendar::getErrorMessage()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.geterrormessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get last error message on the object

## Description

Object-oriented style (method):

```php
public string|false IntlCalendar::getErrorMessage()
```

Procedural style:

```php
string|false intlcal_get_error_message(IntlCalendar $calendar)
```

Returns the error message (if any) associated with the error reported by `IntlCalendar::getErrorCode()` or `intlcal_get_error_code()`. If there is no associated error message, only the string representation of the name of the error constant will be returned. Otherwise, the message also includes a message set on the side of the PHP binding.

## Parameters

- **`$calendar`** — The calendar object, on the procedural style interface.

## Return Values

The error message associated with last error that occurred in a function call on this object, or a string indicating the non-existence of an error. Returns `false` on failure.

## Examples

**`IntlCalendar::getErrorMessage()`**

```php


<?php
$cal = IntlCalendar::createInstance('UTC', 'en_US');
var_dump($cal->getErrorMessage());

$cal->getWeekendTransition(IntlCalendar::DOW_WEDNESDAY);
var_dump($cal->getErrorMessage());


    
```

The above example will output:

```text


string(12) "U_ZERO_ERROR"
string(82) "intlcal_get_weekend_transition: Error calling ICU method: U_ILLEGAL_ARGUMENT_ERROR"

    
```
