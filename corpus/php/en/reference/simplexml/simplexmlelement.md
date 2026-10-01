---
id: "en-php-guide-class-simplexmlelement"
language: "php"
lang: "en"
category: "guide"
name: "class.simplexmlelement"
title: "The SimpleXMLElement class"
module: "simplexml"
source_url: "https://www.php.net/manual/en/class.simplexmlelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SimpleXMLElement class

SimpleXMLElement

   Introduction  Represents an element in an XML document.      Class Synopsis    `SimpleXMLElement`   `implements` Stringable   Countable   RecursiveIterator         Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Get methods (such as `SimpleXMLElement::asXML()` or `SimpleXMLElement::getName()`) and casting a `SimpleXMLElement` to a `string` no longer implicitly rewind the iterator. The iterator must now be rewound explicitly, using `SimpleXMLElement::rewind()`, where needed. |
| 8.0.0 | `SimpleXMLElement` implements Stringable, Countable, and RecursiveIterator now. |
