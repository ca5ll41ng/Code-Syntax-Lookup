---
id: "en-php-guide-class-ds-map"
language: "php"
lang: "en"
category: "guide"
name: "class.ds-map"
title: "The Map class"
module: "ds"
source_url: "https://www.php.net/manual/en/class.ds-map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Map class

Ds\Map

  Introduction  A Map is a sequential collection of key-value pairs, almost identical to an `array` used in a similar context. Keys can be any type, but must be unique. Values are replaced if added to the map using the same key.     Strengths   Keys and values can be any type, including objects. Supports array syntax (square brackets). Insertion order is preserved. Performance and memory efficiency is very similar to an `array`. Automatically frees allocated memory when its size drops low enough.      Weaknesses   Can’t be converted to an array when objects are used as keys.      Class Synopsis  `Ds\Map`   `Ds\Map`   Ds\Collection   ArrayAccess     `const` `int` `Ds\Map::MIN_CAPACITY` 8       Predefined Constants 
- **`Ds\Map::MIN_CAPACITY`**

   Changelog  
|  |  |
| --- | --- |
| PECL ds 1.3.0 | The class now implements `ArrayAccess`. |
| PECL ds 1.2.0 | `Ds\Map::MIN_CAPACITY` changed from 16 to 8. |
