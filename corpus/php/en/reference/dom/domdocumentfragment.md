---
id: "en-php-guide-class-domdocumentfragment"
language: "php"
lang: "en"
category: "guide"
name: "class.domdocumentfragment"
title: "The DOMDocumentFragment class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domdocumentfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMDocumentFragment class

DOMDocumentFragment

     Class Synopsis    `DOMDocumentFragment`   `extends` `DOMNode`   `implements` DOMParentNode      `public` `readonly` `DOMElement|null` `firstElementChild`   `public` `readonly` `DOMElement|null` `lastElementChild`   `public` `readonly` `int` `childElementCount`            Properties 
- **`childElementCount`** — The number of child elements.
- **`firstElementChild`** — First child element or `null`.
- **`lastElementChild`** — Last child element or `null`.

   Changelog 
|  |  |
| --- | --- |
| 8.0.0 | The `firstElementChild`, `lastElementChild`, and `childElementCount` properties have been added. |
| 8.0.0 | `DOMDocumentFragment` implements DOMParentNode now. |
