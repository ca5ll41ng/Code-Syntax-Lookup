---
id: "en-php-guide-class-intldateformatter"
language: "php"
lang: "en"
category: "guide"
name: "class.intldateformatter"
title: "The IntlDateFormatter class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.intldateformatter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IntlDateFormatter class

IntlDateFormatter

   Introduction  Date Formatter is a concrete class that enables locale-dependent formatting/parsing of dates using pattern strings and/or canned patterns.    This class represents the ICU date formatting functionality. It allows users to display dates in a localized format or to parse strings into PHP date values using pattern strings and/or canned patterns.      Class synopsis    `IntlDateFormatter`    `public` `const` `int` `IntlDateFormatter::FULL`   `public` `const` `int` `IntlDateFormatter::LONG`   `public` `const` `int` `IntlDateFormatter::MEDIUM`   `public` `const` `int` `IntlDateFormatter::SHORT`   `public` `const` `int` `IntlDateFormatter::NONE`   `public` `const` `int` `IntlDateFormatter::RELATIVE_FULL`   `public` `const` `int` `IntlDateFormatter::RELATIVE_LONG`   `public` `const` `int` `IntlDateFormatter::RELATIVE_MEDIUM`   `public` `const` `int` `IntlDateFormatter::RELATIVE_SHORT`   `public` `const` `int` `IntlDateFormatter::PATTERN`   `public` `const` `int` `IntlDateFormatter::GREGORIAN`   `public` `const` `int` `IntlDateFormatter::TRADITIONAL`         Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Added `IntlDateFormatter::PATTERN`. |

   See Also    [ICU Date formatter]()     [ICU Date formats]()        Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
