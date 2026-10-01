---
id: "en-php-guide-class-quickhashintset"
language: "php"
lang: "en"
category: "guide"
name: "class.quickhashintset"
title: "The QuickHashIntSet class"
module: "quickhash"
source_url: "https://www.php.net/manual/en/class.quickhashintset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The QuickHashIntSet class

QuickHashIntSet

   Introduction  This class wraps around a set containing integer numbers.    Sets can also be iterated over with `foreach` as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.      Class Synopsis   `QuickHashIntSet`    `QuickHashIntSet`      `const` `int` `QuickHashIntSet::CHECK_FOR_DUPES` 1   `const` `int` `QuickHashIntSet::DO_NOT_USE_ZEND_ALLOC` 2   `const` `int` `QuickHashIntSet::HASHER_NO_HASH` 256   `const` `int` `QuickHashIntSet::HASHER_JENKINS1` 512   `const` `int` `QuickHashIntSet::HASHER_JENKINS2` 1024         Predefined Constants 
- **`QuickHashIntSet::CHECK_FOR_DUPES`** — If enabled, adding duplicate elements to a set (through either `QuickHashIntSet::add()` or `QuickHashIntSet::loadFromFile()`) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.
- **`QuickHashIntSet::DO_NOT_USE_ZEND_ALLOC`** — Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.
- **`QuickHashIntSet::HASHER_NO_HASH`** — Selects to not use a hashing function, but merely use a modulo to find the bucket list index. This is not faster than normal hashing, and gives more collisions.
- **`QuickHashIntSet::HASHER_JENKINS1`** — This is the default hashing function to turn the integer hashes into bucket list indexes.
- **`QuickHashIntSet::HASHER_JENKINS2`** — Selects a variant hashing algorithm.
