---
id: "en-php-guide-class-recursivearrayiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.recursivearrayiterator"
title: "The RecursiveArrayIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.recursivearrayiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RecursiveArrayIterator class

RecursiveArrayIterator

   Introduction  This iterator allows for unsetting and modifying values and keys while iterating over arrays and objects, in the same way as the `ArrayIterator`. Additionally, it is possible to iterate over the current iterator entry.      Class Synopsis    `RecursiveArrayIterator`   `extends` `ArrayIterator`   `implements` RecursiveIterator      `public` `const` `int` `RecursiveArrayIterator::CHILD_ARRAYS_ONLY`          Predefined Constants  RecursiveArrayIterator Flags 
- **`RecursiveArrayIterator::CHILD_ARRAYS_ONLY`** — Treat only arrays (not objects) as having children for recursive iteration.

     Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
