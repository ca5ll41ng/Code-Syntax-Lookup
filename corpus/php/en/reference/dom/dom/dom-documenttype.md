---
id: "en-php-guide-class-dom-documenttype"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-documenttype"
title: "The Dom\\DocumentType class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-documenttype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\DocumentType class

Dom\DocumentType

  Introduction  Each `Dom\Document` has a `doctype` attribute whose value is either `null` or a `Dom\DocumentType` object.    This is the modern, spec-compliant equivalent of `DOMImplementation`.     Class Synopsis   `Dom\DocumentType`   `extends` `Dom\Node`   `implements` Dom\ChildNode      `public` `readonly` `string` `name`   `public` `readonly` `Dom\DtdNamedNodeMap` `entities`   `public` `readonly` `Dom\DtdNamedNodeMap` `notations`   `public` `readonly` `string` `publicId`   `public` `readonly` `string` `systemId`   `public` `readonly` `string|null` `internalSubset`     Not documented yet   Not documented yet     Properties 
- ****
- ****
- ****
- **`entities`** — A `Dom\DtdNamedNodeMap` containing the general entities, both external and internal, declared in the DTD.
- **`notations`** — A `Dom\DtdNamedNodeMap` containing the notations declared in the DTD.
- ****
