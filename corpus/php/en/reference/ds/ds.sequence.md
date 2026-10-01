---
id: "en-php-guide-class-ds-sequence"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-sequence"
title: "The Sequence interface"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-sequence.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Sequence interface

Ds\Sequence

  Introduction  A Sequence describes the behaviour of values arranged in a single, linear dimension. Some languages refer to this as a "List". It’s similar to an array that uses incremental integer keys, with the exception of a few characteristics:  Values will always be indexed as [0, 1, 2, …, size - 1]. Only allowed to access values by index in the range [0, size - 1].     Use cases:  Wherever you would use an array as a list (not concerned with keys). A more efficient alternative to `SplDoublyLinkedList` and `SplFixedArray`.         Ds\Sequence  `extends` Ds\Collection   ArrayAccess             Changelog  
|  |  |
| --- | --- |
| PECL ds 1.3.0 | The interface now extends `ArrayAccess`. |
