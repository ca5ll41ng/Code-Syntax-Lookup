---
id: "en-php-guide-class-dom-htmlcollection"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-htmlcollection"
title: "The Dom\\HTMLCollection class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-htmlcollection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\HTMLCollection class

Dom\HTMLCollection

  Introduction  Represents a static set of elements. It is similar to `Dom\NodeList`, but restricted to `Dom\Element` nodes.     Class Synopsis   `Dom\HTMLCollection`   `implements` IteratorAggregate   Countable    `public` `readonly` `int` `length`   Not documented yet     Properties 
- **`length`** — The number of elements.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Cloning a `Dom\HTMLCollection` object now fails. |

   Notes 
> The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.
