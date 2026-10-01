---
id: "en-php-guide-class-domelement"
language: "php"
lang: "en"
category: "guide"
name: "class.domelement"
title: "The DOMElement class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMElement class

DOMElement

     Class Synopsis    `DOMElement`   `extends` `DOMNode`   `implements` DOMParentNode   DOMChildNode      `public` `readonly` `string` `tagName`   `public` `string` `className`   `public` `string` `id`   `public` `readonly` `mixed` `schemaTypeInfo`   `public` `readonly` `DOMElement|null` `firstElementChild`   `public` `readonly` `DOMElement|null` `lastElementChild`   `public` `readonly` `int` `childElementCount`   `public` `readonly` `DOMElement|null` `previousElementSibling`   `public` `readonly` `DOMElement|null` `nextElementSibling`              Properties 
- **`childElementCount`** — The number of child elements.
- **`firstElementChild`** — First child element or `null`.
- **`lastElementChild`** — Last child element or `null`.
- **`nextElementSibling`** — The next sibling element or `null`.
- **`previousElementSibling`** — The previous sibling element or `null`.
- **`schemaTypeInfo`** — Not implemented yet, always return `null`
- **`tagName`** — The element name
- **`className`** — A string representing the classes of the element separated by spaces.
- **`id`** — Reflects the element ID through the `"id"` attribute.

    Changelog 
|  |  |
| --- | --- |
| 8.3.0 | The `className` and `id` properties and the `DOMElement::getAttributeNames()`, `DOMElement::insertAdjacentElement()`, `DOMElement::insertAdjacentText()`, and `DOMElement::toggleAttribute()` methods have been added. |
| 8.0.0 | The `firstElementChild`, `lastElementChild`, `childElementCount`, `previousElementSibling`, and `nextElementSibling` properties have been added. |
| 8.0.0 | `DOMElement` implements DOMParentNode and DOMChildNode now. |

    Notes 
> The DOM extension uses UTF-8 encoding. Use `mb_convert_encoding()`, `UConverter::transcode()`, or `iconv()` to handle other encodings.
