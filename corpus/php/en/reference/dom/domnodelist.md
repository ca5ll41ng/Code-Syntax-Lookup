---
id: "en-php-guide-class-domnodelist"
language: "php"
lang: "en"
category: "guide"
name: "class.domnodelist"
title: "The DOMNodeList class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domnodelist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMNodeList class

DOMNodeList

  Introduction  Represents a live list of nodes.     Class Synopsis   `DOMNodeList`   `implements` IteratorAggregate   Countable    `public` `readonly` `int` `length`       Properties 
- **`length`** — The number of nodes in the list. The range of valid child node indices is 0 to `length - 1` inclusive.

   Changelog  
|  |  |
| --- | --- |
| 8.5.0 | Cloning a `DOMNodeList` object now fails. |
| 8.0.0 | `DOMNodeList` implements IteratorAggregate now. Previously, Traversable was implemented instead. |
| 7.2.0 | The `Countable` interface is implemented and returns the value of the length property. |

     Notes 
> Nodes in the list can be accessed by array syntax.

   See Also   [W3C specification of NodeList]()
