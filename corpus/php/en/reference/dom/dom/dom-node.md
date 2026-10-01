---
id: "en-php-guide-class-dom-node"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-node"
title: "The Dom\\Node class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-node.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\Node class

Dom\Node

  Introduction  This is the modern, spec-compliant equivalent of `DOMNode`.     Class Synopsis   `Dom\Node`    `public` `const` `int` `Dom\Node::DOCUMENT_POSITION_DISCONNECTED` 0x1   `public` `const` `int` `Dom\Node::DOCUMENT_POSITION_PRECEDING` 0x2   `public` `const` `int` `Dom\Node::DOCUMENT_POSITION_FOLLOWING` 0x4   `public` `const` `int` `Dom\Node::DOCUMENT_POSITION_CONTAINS` 0x8   `public` `const` `int` `Dom\Node::DOCUMENT_POSITION_CONTAINED_BY` 0x10   `public` `const` `int` `Dom\Node::DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` 0x20    `public` `readonly` `int` `nodeType`   `public` `readonly` `string` `nodeName`   `public` `readonly` `string` `baseURI`   `public` `readonly` `bool` `isConnected`   `public` `readonly` `Dom\Document|null` `ownerDocument`   `public` `readonly` `Dom\Node|null` `parentNode`   `public` `readonly` `Dom\Element|null` `parentElement`   `public` `readonly` `Dom\NodeList` `childNodes`   `public` `readonly` `Dom\Node|null` `firstChild`   `public` `readonly` `Dom\Node|null` `lastChild`   `public` `readonly` `Dom\Node|null` `previousSibling`   `public` `readonly` `Dom\Node|null` `nextSibling`   `public` `string|null` `nodeValue`   `public` `string|null` `textContent`   Not documented yet     Predefined Constants 
- ****
- ****
- ****
- ****
- ****
- ****

   Properties 
- ****
- **`nodeName`** — Returns the most accurate name for the current node type.
  - For elements, this is the HTML-uppercased qualified name.
  - For attributes, this is the qualified name.
  - For processing instructions, this is the target.
  - For document type nodes, this is the name.

- ****
- ****
- **`ownerDocument`** — The `Dom\Document` object associated with this node, or `null` if this node is a document.
- ****
- ****
- **`childNodes`** — A `Dom\NodeList` that contains all children of this node. If there are no children, this is an empty `Dom\NodeList`.
- ****
- ****
- ****
- ****
- **`nodeValue`** — The value of this node, depending on its type.
- ****

   Notes 
> The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.

   See Also  [WHATWG specification of Node]()
