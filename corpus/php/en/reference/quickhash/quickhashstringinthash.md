---
id: "en-php-guide-class-quickhashstringinthash"
language: "php"
lang: "en"
category: "guide"
name: "class.quickhashstringinthash"
title: "The QuickHashStringIntHash class"
module: "quickhash"
source_url: "https://www.php.net/manual/en/class.quickhashstringinthash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The QuickHashStringIntHash class

QuickHashStringIntHash

   Introduction  This class wraps around a hash containing strings, where the values are integer numbers. Hashes are also available as implementation of the ArrayAccess interface.    Hashes can also be iterated over with `foreach` as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.      Class Synopsis   `QuickHashStringIntHash`    `QuickHashStringIntHash`      `const` `int` `QuickHashStringIntHash::CHECK_FOR_DUPES` 1   `const` `int` `QuickHashStringIntHash::DO_NOT_USE_ZEND_ALLOC` 2         Predefined Constants 
- **`QuickHashStringIntHash::CHECK_FOR_DUPES`** — If enabled, adding duplicate elements to a set (through either `QuickHashStringIntHash::add()` or `QuickHashStringIntHash::loadFromFile()`) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.
- **`QuickHashStringIntHash::DO_NOT_USE_ZEND_ALLOC`** — Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.
