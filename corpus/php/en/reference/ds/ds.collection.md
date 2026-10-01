---
id: "en-php-guide-class-ds-collection"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-collection"
title: "The Collection interface"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-collection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Collection interface

Ds\Collection

  Introduction  `Collection` is the base interface which covers functionality common to all the data structures in this library. It guarantees that all structures are traversable, countable, and can be converted to json using `json_encode()`.       Ds\Collection  `extends` Countable   IteratorAggregate   JsonSerializable           Changelog 
|  |  |
| --- | --- |
| PECL ds 1.4.0 | `Collection` implements IteratorAggregate now instead of just Traversable. (This change came to the polyfill in 1.4.1.) |
