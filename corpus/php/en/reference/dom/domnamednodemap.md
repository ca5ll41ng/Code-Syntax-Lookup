---
id: "en-php-guide-class-domnamednodemap"
language: "php"
lang: "en"
category: "guide"
name: "class.domnamednodemap"
title: "The DOMNamedNodeMap class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domnamednodemap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMNamedNodeMap class

DOMNamedNodeMap

     Class Synopsis    `DOMNamedNodeMap`   `implements` IteratorAggregate   Countable    `public` `readonly` `int` `length`         Properties 
- **`length`** — The number of nodes in the map. The range of valid child node indices is `0` to `length - 1` inclusive.

    Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Cloning a `DOMNamedNodeMap` object now fails. |
| 8.0.0 | The unimplemented methods `DOMNamedNodeMap::setNamedItem()`, `DOMNamedNodeMap::removeNamedItem()`, `DOMNamedNodeMap::setNamedItemNS()` and `DOMNamedNodeMap::removeNamedItem()` have been removed. |
| 8.0.0 | `DOMNamedNodeMap` implements IteratorAggregate now. Previously, Traversable was implemented instead. |

   Notes 
> Nodes in the map can be accessed by array syntax.
