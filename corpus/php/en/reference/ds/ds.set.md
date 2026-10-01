---
id: "en-php-guide-class-ds-set"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-set"
title: "The Set class"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Set class

Ds\Set

  Introduction  A Set is a sequence of unique values. This implementation uses the same hash table as `Ds\Map`, where values are used as keys and the mapped value is ignored.     Strengths   Values can be any type, including objects. Supports array syntax (square brackets). Insertion order is preserved. Automatically frees allocated memory when its size drops low enough.  `add()`, `remove()` and `contains()` are all O(1).       Weaknesses   Doesn’t support `push()`, `pop()`, `insert()`, `shift()`, or `unshift()`.   `get()` is O(n) if there are deleted values in the buffer before the accessed index, O(1) otherwise.       Class Synopsis  `Ds\Set`   `Ds\Set`   Ds\Collection   ArrayAccess     `const` `int` `Ds\Set::MIN_CAPACITY` 8       Predefined Constants 
- **`Ds\Set::MIN_CAPACITY`**

   Changelog  
|  |  |
| --- | --- |
| PECL ds 1.3.0 | The class now implements `ArrayAccess`. |
| PECL ds 1.2.7 | Added the `Ds\Set::map()` method. |
| PECL ds 1.2.0 | `Ds\Set::MIN_CAPACITY` changed from 16 to 8. |
