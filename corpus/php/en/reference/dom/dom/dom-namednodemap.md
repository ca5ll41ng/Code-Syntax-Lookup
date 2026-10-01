---
id: "en-php-guide-class-dom-namednodemap"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-namednodemap"
title: "The Dom\\NamedNodeMap class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-namednodemap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\NamedNodeMap class

Dom\NamedNodeMap

  Introduction  Represents the set of attributes on an element. This is the modern, spec-compliant equivalent of `DOMNamedNodeMap`.     Class Synopsis   `Dom\NamedNodeMap`   `implements` IteratorAggregate   Countable    `public` `readonly` `int` `length`   Not documented yet     Properties 
- **`length`** — The number of attributes.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Cloning a `Dom\NamedNodeMap` object now fails. |

   Notes 
> The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.
