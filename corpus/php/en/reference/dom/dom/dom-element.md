---
id: "en-php-guide-class-dom-element"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-element"
title: "The Dom\\Element class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-element.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\Element class

Dom\Element

  Introduction  Represents an element.    This is the modern, spec-compliant equivalent of `DOMElement`.     Class Synopsis   `Dom\Element`   `extends` `Dom\Node`   `implements` Dom\ParentNode   Dom\ChildNode      `public` `readonly` `string|null` `namespaceURI`   `public` `readonly` `string|null` `prefix`   `public` `readonly` `string` `localName`   `public` `readonly` `string` `tagName`   `public` `string` `id`   `public` `string` `className`   `public` `readonly` `Dom\TokenList` `classList`   `public` `readonly` `Dom\NamedNodeMap` `attributes`   `public` `readonly` `Dom\Element|null` `firstElementChild`   `public` `readonly` `Dom\Element|null` `lastElementChild`   `public` `readonly` `int` `childElementCount`   `public` `readonly` `Dom\Element|null` `previousElementSibling`   `public` `readonly` `Dom\Element|null` `nextElementSibling`   `public` `readonly` `Dom\HTMLCollection` `children`   `public` `string` `innerHTML`   `public` `string` `outerHTML`   `public` `string` `substitutedNodeValue`     Not documented yet   Not documented yet     Properties 
- **`namespaceURI`** — The namespace URI of the element.
- **`prefix`** — The namespace prefix of the element.
- **`localName`** — The local name of the element.
- **`tagName`** — The HTML-uppercased qualified name of the element.
- ****
- **`classList`** — Returns an instance of `Dom\TokenList` to easily manage the classes on this element.
- **`attributes`** — Returns an instance of `Dom\NamedNodeMap` that represents the attributes of this element.
- ****
- ****
- ****
- ****
- ****
- ****
- ****
- **`innerHTML`** — The inner HTML (or XML for XML documents) of the element.
- **`outerHTML`** — The outer HTML (or XML for XML documents) of the element, including the element itself. Available as of PHP 8.5.0.
- **`substitutedNodeValue`** — The node value with entity substitution enabled.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | Added the `Dom\Element::getElementsByClassName()` method. |

   Notes 
> The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.
