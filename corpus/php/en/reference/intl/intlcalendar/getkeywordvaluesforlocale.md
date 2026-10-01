---
id: "en-php-function-intlcalendar-getkeywordvaluesforlocale"
language: "php"
lang: "en"
category: "function"
name: "IntlCalendar::getKeywordValuesForLocale"
title: "Get set of locale keyword values"
signature: "public static IntlIterator|false IntlCalendar::getKeywordValuesForLocale(string $keyword, string $locale, bool $onlyCommon)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlcalendar.getkeywordvaluesforlocale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get set of locale keyword values

## Description

Object-oriented style

```php
public static IntlIterator|false IntlCalendar::getKeywordValuesForLocale(string $keyword, string $locale, bool $onlyCommon)
```

Procedural style

```php
IntlIterator|false intlcal_get_keyword_values_for_locale(string $keyword, string $locale, bool $onlyCommon)
```

For a given locale key, get the set of values for that key that would result in a different behavior. For now, only the `'calendar'` keyword is supported.

This function requires ICU 4.2 or later.

## Parameters

- **`$keyword`** — The locale keyword for which relevant values are to be queried. Only `'calendar'` is supported.
- **`$locale`** — The locale onto which the keyword/value pair are to be appended.
- **`$onlyCommon`** — Whether to show only the values commonly used for the specified locale.

## Return Values

An iterator that yields strings with the locale keyword values or `false` on failure.

## Examples

**`IntlCalendar::getKeywordValuesForLocale()`**

```php


<?php
print_r(
        iterator_to_array(
                IntlCalendar::getKeywordValuesForLocale(
                        'calendar', 'fa_IR', true)));
print_r(
        iterator_to_array(
                IntlCalendar::getKeywordValuesForLocale(
                        'calendar', 'fa_IR', false)));





    
```

The above example will output:

```text


Array
(
    [0] => persian
    [1] => gregorian
    [2] => islamic
    [3] => islamic-civil
)
Array
(
    [0] => persian
    [1] => gregorian
    [2] => islamic
    [3] => islamic-civil
    [4] => japanese
    [5] => buddhist
    [6] => roc
    [7] => hebrew
    [8] => chinese
    [9] => indian
    [10] => coptic
    [11] => ethiopic
    [12] => ethiopic-amete-alem
)


    
```
