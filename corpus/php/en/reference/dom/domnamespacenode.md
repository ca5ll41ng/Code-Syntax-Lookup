---
id: "en-php-guide-class-domnamespacenode"
language: "php"
lang: "en"
category: "guide"
name: "class.domnamespacenode"
title: "The DOMNameSpaceNode class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domnamespacenode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMNameSpaceNode class

DOMNameSpaceNode

   Class Synopsis    `DOMNameSpaceNode`    `public` `readonly` `string` `nodeName`   `public` `readonly` `string|null` `nodeValue`   `public` `readonly` `int` `nodeType`   `public` `readonly` `string` `prefix`   `public` `readonly` `string|null` `localName`   `public` `readonly` `string|null` `namespaceURI`   `public` `readonly` `bool` `isConnected`   `public` `readonly` `DOMDocument|null` `ownerDocument`   `public` `readonly` `DOMNode|null` `parentNode`   `public` `readonly` `DOMElement|null` `parentElement`         Properties 
- **`nodeName`** — The qualified name of this node.
- **`nodeValue`** — The namespace URI declared by this node, or `null` if the empty namespace.
- **`nodeType`** — The type of the node. In this case it returns `XML_NAMESPACE_DECL_NODE`.
- **`prefix`** — The namespace prefix declared by this node.
- **`localName`** — The local part of the qualified name of this node.
- **`namespaceURI`** — The namespace URI declared by this node, or `null` if it is unspecified.
- **`isConnected`** — Whether the node is connected to a document.
- **`ownerDocument`** — The `DOMDocument` object associated with this node, or `null` if this node is a `DOMDocument`
- **`parentNode`** — The parent of this node. If there is no such node, this returns `null`.
- **`parentElement`** — The parent element of this node. If there is no such element, this returns `null`.

    Changelog 
|  |  |
| --- | --- |
| 8.3.0 | Properties DOMNameSpaceNode::$parentElement, and DOMNameSpaceNode::$isConnected have been added. |
