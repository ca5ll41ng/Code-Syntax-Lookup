---
id: "en-php-guide-class-dom-attr"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-attr"
title: "The `Dom\\Attr` class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-attr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The `Dom\Attr` class

Dom\Attr

  Introduction  `Dom\Attr` represents an attribute in the `Dom\Element` object.    This is the modern, spec-compliant equivalent of `DOMAttr`.     Class Synopsis   `Dom\Attr`   `extends` `Dom\Node`      `public` `readonly` `string|null` `namespaceURI`   `public` `readonly` `string|null` `prefix`   `public` `readonly` `string` `localName`   `public` `readonly` `string` `name`   `public` `string` `value`   `public` `readonly` `Dom\Element|null` `ownerElement`   `public` `readonly` `bool` `specified`       Not documented yet     Properties 
- **`namespaceURI`** — The namespace URI of the attribute.
- **`prefix`** — The namespace prefix of the attribute.
- **`localName`** — The local name of the attribute.
- **`name`** — The qualified name of the attribute.
- **`value`** — The value of the attribute.
  > Unlike the equivalent property in `DOMAttr`, this does not substitute entities.

- **`ownerElement`** — The element that contains the attribute or `null`.
- **`specified`** — Legacy option, always is `true`.

   See Also  [WHATWG specification of Attr]()
