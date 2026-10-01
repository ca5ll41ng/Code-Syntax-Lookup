---
id: "en-php-guide-class-dom-dtdnamednodemap"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-dtdnamednodemap"
title: "The Dom\\DtdNamedNodeMap class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-dtdnamednodemap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\DtdNamedNodeMap class

Dom\DtdNamedNodeMap

  Introduction  Represents a named node map for entities and notation nodes of the DTD. It is similar to `Dom\NamedNodeMap`, but restricted to `Dom\Entity` and `Dom\Notation` nodes.     Class Synopsis   `Dom\DtdNamedNodeMap`   `implements` IteratorAggregate   Countable    `public` `readonly` `int` `length`   Not documented yet     Properties 
- **`length`** — The total number of entities and notation nodes.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Cloning a `Dom\DtdNamedNodeMap` object now fails. |
