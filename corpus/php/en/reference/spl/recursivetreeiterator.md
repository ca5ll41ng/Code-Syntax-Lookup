---
id: "en-php-guide-class-recursivetreeiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.recursivetreeiterator"
title: "The RecursiveTreeIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.recursivetreeiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RecursiveTreeIterator class

RecursiveTreeIterator

   Introduction  Allows iterating over a `RecursiveIterator` to generate an ASCII graphic tree.      Class Synopsis    `RecursiveTreeIterator`   `extends` `RecursiveIteratorIterator`      `public` `const` `int` `RecursiveTreeIterator::BYPASS_CURRENT`   `public` `const` `int` `RecursiveTreeIterator::BYPASS_KEY`   `public` `const` `int` `RecursiveTreeIterator::PREFIX_LEFT`   `public` `const` `int` `RecursiveTreeIterator::PREFIX_MID_HAS_NEXT` 1   `public` `const` `int` `RecursiveTreeIterator::PREFIX_MID_LAST` 2   `public` `const` `int` `RecursiveTreeIterator::PREFIX_END_HAS_NEXT` 3   `public` `const` `int` `RecursiveTreeIterator::PREFIX_END_LAST` 4   `public` `const` `int` `RecursiveTreeIterator::PREFIX_RIGHT` 5            Predefined Constants 
- **`RecursiveTreeIterator::BYPASS_CURRENT`**
- **`RecursiveTreeIterator::BYPASS_KEY`**
- **`RecursiveTreeIterator::PREFIX_LEFT`**
- **`RecursiveTreeIterator::PREFIX_MID_HAS_NEXT`**
- **`RecursiveTreeIterator::PREFIX_MID_LAST`**
- **`RecursiveTreeIterator::PREFIX_END_HAS_NEXT`**
- **`RecursiveTreeIterator::PREFIX_END_LAST`**
- **`RecursiveTreeIterator::PREFIX_RIGHT`**

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
