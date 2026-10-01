---
id: "en-php-guide-class-ds-deque"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-deque"
title: "The Deque class"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-deque.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Deque class

Ds\Deque

  Introduction  A Deque (pronounced “deck”) is a sequence of values in a contiguous buffer that grows and shrinks automatically. The name is a common abbreviation of “double-ended queue” and is used internally by `Ds\Queue`.    Two pointers are used to keep track of a head and a tail. The pointers can “wrap around” the end of the buffer, which avoids the need to move other values around to make room. This makes shift and unshift very fast — something a `Ds\Vector` can’t compete with.    Accessing a value by index requires a translation between the index and its corresponding position in the buffer: ((head + position) % capacity).     Strengths   Supports array syntax (square brackets). Uses less overall memory than an `array` for the same number of values. Automatically frees allocated memory when its size drops low enough.  `get()`, `set()`, `push()`, `pop()`, `shift()`, and `unshift()` are all O(1).       Weaknesses   Capacity must be a power of 2.  `insert()` and `remove()` are O(n).       Class Synopsis  `Ds\Deque`   `Ds\Deque`   Ds\Sequence   ArrayAccess     `const` `int` `Ds\Deque::MIN_CAPACITY` 8       Predefined Constants 
- **`Ds\Deque::MIN_CAPACITY`**

   Changelog  
|  |  |
| --- | --- |
| PECL ds 1.3.0 | The class now implements `ArrayAccess`. |
