---
id: "en-php-guide-class-quickhashinthash"
language: "php"
lang: "en"
category: "guide"
name: "class.quickhashinthash"
title: "The QuickHashIntHash class"
module: "quickhash"
source_url: "https://www.php.net/manual/en/class.quickhashinthash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The QuickHashIntHash class

QuickHashIntHash

   Introduction  This class wraps around a hash containing integer numbers, where the values are also integer numbers. Hashes are also available as implementation of the ArrayAccess interface.    Hashes can also be iterated over with `foreach` as the Iterator interface is implemented as well. The order of which elements are returned in is not guaranteed.      Class Synopsis   `QuickHashIntHash`    `QuickHashIntHash`      `const` `int` `QuickHashIntHash::CHECK_FOR_DUPES` 1   `const` `int` `QuickHashIntHash::DO_NOT_USE_ZEND_ALLOC` 2   `const` `int` `QuickHashIntHash::HASHER_NO_HASH` 256   `const` `int` `QuickHashIntHash::HASHER_JENKINS1` 512   `const` `int` `QuickHashIntHash::HASHER_JENKINS2` 1024         Predefined Constants 
- **`QuickHashIntHash::CHECK_FOR_DUPES`** — If enabled, adding duplicate elements to a set (through either `QuickHashIntHash::add()` or `QuickHashIntHash::loadFromFile()`) will result in those elements to be dropped from the set. This will take up extra time, so only used when it is required.
- **`QuickHashIntHash::DO_NOT_USE_ZEND_ALLOC`** — Disables the use of PHP's internal memory manager for internal set structures. With this option enabled, internal allocations will not count towards the memory_limit settings.
- **`QuickHashIntHash::HASHER_NO_HASH`** — Selects to not use a hashing function, but merely use a modulo to find the bucket list index. This is not faster than normal hashing, and gives more collisions.
- **`QuickHashIntHash::HASHER_JENKINS1`** — This is the default hashing function to turn the integer hashes into bucket list indexes.
- **`QuickHashIntHash::HASHER_JENKINS2`** — Selects a variant hashing algorithm.
