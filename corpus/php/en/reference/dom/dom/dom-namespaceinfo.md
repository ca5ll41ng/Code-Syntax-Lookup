---
id: "en-php-guide-class-dom-namespaceinfo"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-namespaceinfo"
title: "The Dom\\NamespaceInfo class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-namespaceinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\NamespaceInfo class

Dom\NamespaceInfo

  Introduction  This represents immutable information about namespaces of an element. This decouples namespaces from attributes, which was incorrectly intertwined for the old DOM classes.     Class Synopsis   `final` `readonly` `Dom\NamespaceInfo`    `public` `string|null` `prefix`   `public` `string|null` `namespaceURI`   `public` `Dom\Element` `element`      Properties 
- **`prefix`** — The namespace prefix of the attribute.
- **`namespaceURI`** — The namespace URI of the attribute.
- **`element`** — The element that this namespace information is about.
