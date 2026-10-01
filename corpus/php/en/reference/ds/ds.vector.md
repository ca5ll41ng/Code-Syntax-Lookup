---
id: "en-php-guide-class-ds-vector"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-vector"
title: "The Vector class"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-vector.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Vector class

Ds\Vector

  Introduction  A Vector is a sequence of values in a contiguous buffer that grows and shrinks automatically. It’s the most efficient sequential structure because a value’s index is a direct mapping to its index in the buffer, and the growth factor isn't bound to a specific multiple or exponent.     Strengths   Supports array syntax (square brackets). Uses less overall memory than an `array` for the same number of values. Automatically frees allocated memory when its size drops low enough. Capacity does not have to be a power of 2.  `get()`, `set()`, `push()`, `pop()` are all O(1).       Weaknesses    `shift()`, `unshift()`, `insert()` and `remove()` are all O(n).       Class Synopsis   `Ds\Vector`   `Ds\Vector` Ds\Sequence ArrayAccess    `const` `int` `Ds\Vector::MIN_CAPACITY` 8       Predefined Constants 
- **`Ds\Vector::MIN_CAPACITY`**

   Changelog  
|  |  |
| --- | --- |
| PECL ds 1.3.0 | The class now implements `ArrayAccess`. |
| PECL ds 1.2.0 | `Ds\Vector::MIN_CAPACITY` changed from 10 to 8. |
