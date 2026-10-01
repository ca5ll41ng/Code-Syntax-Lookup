---
id: "en-php-guide-class-intllistformatter"
language: "php"
lang: "en"
category: "guide"
name: "class.intllistformatter"
title: "The IntlListFormatter class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.intllistformatter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IntlListFormatter class

IntlListFormatter

   Introduction  Formats, orders, and punctuates a list of items according to locale-specific rules. Requires ICU 67 or later.      Class Synopsis    `IntlListFormatter`    `public` `const` `int` `IntlListFormatter::TYPE_AND`   `public` `const` `int` `IntlListFormatter::TYPE_OR`   `public` `const` `int` `IntlListFormatter::TYPE_UNITS`   `public` `const` `int` `IntlListFormatter::WIDTH_WIDE`   `public` `const` `int` `IntlListFormatter::WIDTH_SHORT`   `public` `const` `int` `IntlListFormatter::WIDTH_NARROW`         Predefined Constants 
- **`IntlListFormatter::TYPE_AND`** — Formats a list using conjunction (e.g. "A, B, and C").
- **`IntlListFormatter::TYPE_OR`** — Formats a list using disjunction (e.g. "A, B, or C").
- **`IntlListFormatter::TYPE_UNITS`** — Formats a list of units (e.g. "3 ft, 7 in").
- **`IntlListFormatter::WIDTH_WIDE`** — Uses the widest (most verbose) list format, typically with conjunctions spelled out in full.
- **`IntlListFormatter::WIDTH_SHORT`** — Uses a short list format, typically using abbreviations.
- **`IntlListFormatter::WIDTH_NARROW`** — Uses the narrowest list format, with minimal punctuation.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | The class was added. |
