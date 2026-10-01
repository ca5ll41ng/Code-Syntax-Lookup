---
id: "en-php-guide-class-domattr"
language: "php"
lang: "en"
category: "guide"
name: "class.domattr"
title: "The `DOMAttr` class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domattr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The `DOMAttr` class

DOMAttr

   Introduction  `DOMAttr` represents an attribute in the `DOMElement` object.      Class Synopsis    `DOMAttr`   `extends` `DOMNode`      `public` `readonly` `string` `name`   `public` `readonly` `bool` `specified`   `public` `string` `value`   `public` `readonly` `DOMElement|null` `ownerElement`   `public` `readonly` `mixed` `schemaTypeInfo`              Properties 
- **`name`** — The name of the attribute.
- **`ownerElement`** — The element which contains the attribute or `null`.
- **`schemaTypeInfo`** — Not implemented yet, always is `null`.
- **`specified`** — Not implemented yet, always is `true`.
- **`value`** — The value of the attribute.
  > Note, XML entities are expanded upon setting a value. Thus the `&` character has a special meaning. Setting `value` to itself will fail when `value` contains an `&`. To avoid entity expansion, use `DOMElement::setAttribute()` instead.

     See Also   [W3C specification of Attr]()
