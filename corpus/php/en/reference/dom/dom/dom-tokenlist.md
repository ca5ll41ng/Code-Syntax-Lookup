---
id: "en-php-guide-class-dom-tokenlist"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-tokenlist"
title: "The Dom\\TokenList class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-tokenlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\TokenList class

Dom\TokenList

  Introduction  Represents a set of tokens in an attribute (e.g. class names).     Class Synopsis   `final` `Dom\TokenList`   `implements` IteratorAggregate   Countable    `public` `readonly` `int` `length`   `public` `string` `value`       Properties 
- **`length`** — The number of tokens.
- **`value`** — The value of the attribute linked to this object.

   Notes 
> The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.

 
> Tokens in the list can be accessed by array syntax.
