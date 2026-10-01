---
id: "en-php-function-intldateformatter-formatobject"
language: "php"
lang: "en"
category: "function"
name: "IntlDateFormatter::formatObject"
aliases: ["datefmt_format_object"]
title: "Formats an object"
signature: "public static string|false IntlDateFormatter::formatObject(IntlCalendar|DateTimeInterface $datetime, array|int|string|null $format = null, string|null $locale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldateformatter.formatobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Formats an object

## Description

Object-oriented style

```php
public static string|false IntlDateFormatter::formatObject(IntlCalendar|DateTimeInterface $datetime, array|int|string|null $format = null, string|null $locale = null)
```

Procedural style

```php
string|false datefmt_format_object(IntlCalendar|DateTimeInterface $datetime, array|int|string|null $format = null, string|null $locale = null)
```

This function allows formatting an `IntlCalendar` or `DateTime` object without first explicitly creating a `IntlDateFormatter` object.

The temporary `IntlDateFormatter` that will be created will take the timezone from the passed in object. The timezone database bundled with PHP will not be used – ICU's will be used instead. The timezone identifier used in `DateTime` objects must therefore also exist in ICU's database.

## Parameters

- **`$datetime`** — An object of type `IntlCalendar` or `DateTime`. The timezone information in the object will be used.
- **`$format`** — How to format the date/time. This can either be an `array` with two elements (first the date style, then the time style, these being one of the constants `IntlDateFormatter::NONE`, `IntlDateFormatter::SHORT`, `IntlDateFormatter::MEDIUM`, `IntlDateFormatter::LONG`, `IntlDateFormatter::FULL`), an `int` with the value of one of these constants (in which case it will be used both for the time and the date) or a `string` with the format described in [the ICU documentation](). If `null`, the default style will be used.
- **`$locale`** — The locale to use, or `null` to use the default one.

## Return Values

A string with result or `false` on failure.

## Examples

**`IntlDateFormatter::formatObject()` examples**

```php


<?php
/* default timezone is irrelevant; timezone taken from the object */
ini_set('date.timezone', 'UTC');
/* default locale is taken from this ini setting */
ini_set('intl.default_locale', 'fr_FR');

$cal = IntlCalendar::fromDateTime("2013-06-06 17:05:06 Europe/Dublin");
echo "default:\n\t",
        IntlDateFormatter::formatObject($cal),
        "\n";

echo "long \$format (full):\n\t",
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL),
        "\n";

echo "array \$format (none, full):\n\t",
        IntlDateFormatter::formatObject($cal, array(
                IntlDateFormatter::NONE,
                IntlDateFormatter::FULL)),
        "\n";

echo "string \$format (d 'of' MMMM y):\n\t",
        IntlDateFormatter::formatObject($cal, "d 'of' MMMM y", 'en_US'),
        "\n";

echo "with DateTime:\n\t",
        IntlDateFormatter::formatObject(
                new DateTime("2013-09-09 09:09:09 Europe/Madrid"),
                IntlDateFormatter::FULL,
                'es_ES'),
        "\n";


    
```

The above example will output:

```text


default:
    6 juin 2013 17:05:06
long $format (full):
    jeudi 6 juin 2013 17:05:06 heure d’été irlandaise
array $format (none, full):
    17:05:06 heure d’été irlandaise
string $format (d 'of' MMMM y):
    6 of June 2013
with DateTime:
    lunes, 9 de septiembre de 2013 09:09:09 Hora de verano de Europa central


    
```
