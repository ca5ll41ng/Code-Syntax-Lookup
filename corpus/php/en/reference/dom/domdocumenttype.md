---
id: "en-php-guide-class-domdocumenttype"
language: "php"
lang: "en"
category: "guide"
name: "class.domdocumenttype"
title: "The DOMDocumentType class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domdocumenttype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMDocumentType class

DOMDocumentType

   Introduction  Each `DOMDocument` has a `doctype` attribute whose value is either `null` or a `DOMDocumentType` object.      Class Synopsis    `DOMDocumentType`   `extends` `DOMNode`      `public` `readonly` `string` `name`   `public` `readonly` `DOMNamedNodeMap` `entities`   `public` `readonly` `DOMNamedNodeMap` `notations`   `public` `readonly` `string` `publicId`   `public` `readonly` `string` `systemId`   `public` `readonly` `string|null` `internalSubset`           Properties 
- **`publicId`** — The public identifier of the external subset.
- **`systemId`** — The system identifier of the external subset. This may be an absolute URI or not.
- **`name`** — The name of DTD; i.e., the name immediately following the `DOCTYPE` keyword.
- **`entities`** — A `DOMNamedNodeMap` containing the general entities, both external and internal, declared in the DTD.
- **`notations`** — A `DOMNamedNodeMap` containing the notations declared in the DTD.
- **`internalSubset`** — The internal subset as a string, or `null` if there is none. This does not contain the delimiting square brackets.
