---
id: "en-php-guide-class-intlpartsiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.intlpartsiterator"
title: "The IntlPartsIterator class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.intlpartsiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IntlPartsIterator class

IntlPartsIterator

   Introduction  Objects of this class can be obtained from `IntlBreakIterator` objects. While the break iterators provide a sequence of boundary positions when iterated, `IntlPartsIterator` objects provide, as a convenience, the text fragments comprehended between two successive boundaries.    The keys may represent the offset of the left boundary, right boundary, or they may just the sequence of non-negative integers. See `IntlBreakIterator::getPartsIterator()`.      Class Synopsis    `IntlPartsIterator`   `extends` `IntlIterator`    `public` `const` `int` `IntlPartsIterator::KEY_SEQUENTIAL`   `public` `const` `int` `IntlPartsIterator::KEY_LEFT`   `public` `const` `int` `IntlPartsIterator::KEY_RIGHT`           Predefined Constants 
- **`IntlPartsIterator::KEY_SEQUENTIAL` `int`**
- **`IntlPartsIterator::KEY_LEFT` `int`**
- **`IntlPartsIterator::KEY_RIGHT` `int`**

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
