---
id: "en-php-guide-class-multipleiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.multipleiterator"
title: "The MultipleIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.multipleiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MultipleIterator class

MultipleIterator

   Introduction  An Iterator that sequentially iterates over all attached iterators      Class Synopsis    `MultipleIterator`   `implements` Iterator    `public` `const` `int` `MultipleIterator::MIT_NEED_ANY`   `public` `const` `int` `MultipleIterator::MIT_NEED_ALL`   `public` `const` `int` `MultipleIterator::MIT_KEYS_NUMERIC`   `public` `const` `int` `MultipleIterator::MIT_KEYS_ASSOC`          Predefined Constants 
- **`MultipleIterator::MIT_NEED_ANY`** — Do not require all sub iterators to be valid in iteration.
- **`MultipleIterator::MIT_NEED_ALL`** — Require all sub iterators to be valid in iteration.
- **`MultipleIterator::MIT_KEYS_NUMERIC`** — Keys are created from the sub iterators position.
- **`MultipleIterator::MIT_KEYS_ASSOC`** — Keys are created from sub iterators associated information.

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
