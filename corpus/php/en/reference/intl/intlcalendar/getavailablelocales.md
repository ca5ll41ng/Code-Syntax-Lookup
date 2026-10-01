---
id: "en-php-function-intlcalendar-getavailablelocales"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getAvailableLocales"
title: "Get array of locales for which there is data"
signature: "public static array IntlCalendar::getAvailableLocales()"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getavailablelocales.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get array of locales for which there is data

## Description

Object-oriented style

```php
public static array IntlCalendar::getAvailableLocales()
```

Procedural style

```php
array intlcal_get_available_locales()
```

Gives the list of locales for which calendars are installed. As of ICU 51, this is the list of all installed ICU locales.

## Parameters

This function has no parameters.

## Return Values

An `array` of `string`s, one for each locale.

## Examples

**`IntlCalendar::getAvailableLocales()`**

```php


<?php
print_r(IntlCalendar::getAvailableLocales());

    
```

The above example will output:

```text


Array
(
    [0] => af
    [1] => af_NA
    [2] => af_ZA
    [3] => agq
    [4] => agq_CM
    [5] => ak
    [6] => ak_GH
    [7] => am
    [8] => am_ET
    [9] => ar
    [10] => ar_001
    [11] => ar_AE
    [12] => ar_BH
    [13] => ar_DJ
    … output abbreviated …
    [595] => zh_Hant_HK
    [596] => zh_Hant_MO
    [597] => zh_Hant_TW
    [598] => zu
    [599] => zu_ZA
)

    
```
