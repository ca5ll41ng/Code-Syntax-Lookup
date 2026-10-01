---
id: "en-php-guide-class-domnode"
language: "php"
lang: "en"
category: "guide"
name: "class.domnode"
title: "The DOMNode class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domnode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMNode class

DOMNode

   Class Synopsis    `DOMNode`    `public` `const` `int` `DOMNode::DOCUMENT_POSITION_DISCONNECTED` 0x1   `public` `const` `int` `DOMNode::DOCUMENT_POSITION_PRECEDING` 0x2   `public` `const` `int` `DOMNode::DOCUMENT_POSITION_FOLLOWING` 0x4   `public` `const` `int` `DOMNode::DOCUMENT_POSITION_CONTAINS` 0x8   `public` `const` `int` `DOMNode::DOCUMENT_POSITION_CONTAINED_BY` 0x10   `public` `const` `int` `DOMNode::DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` 0x20    `public` `readonly` `string` `nodeName`   `public` `string|null` `nodeValue`   `public` `readonly` `int` `nodeType`   `public` `readonly` `DOMNode|null` `parentNode`   `public` `readonly` `DOMElement|null` `parentElement`   `public` `readonly` `DOMNodeList` `childNodes`   `public` `readonly` `DOMNode|null` `firstChild`   `public` `readonly` `DOMNode|null` `lastChild`   `public` `readonly` `DOMNode|null` `previousSibling`   `public` `readonly` `DOMNode|null` `nextSibling`   `public` `readonly` `DOMNamedNodeMap|null` `attributes`   `public` `readonly` `bool` `isConnected`   `public` `readonly` `DOMDocument|null` `ownerDocument`   `public` `readonly` `string|null` `namespaceURI`   `public` `string` `prefix`   `public` `readonly` `string|null` `localName`   `public` `readonly` `string|null` `baseURI`   `public` `string` `textContent`        Predefined Constants 
- **`DOMNode::DOCUMENT_POSITION_DISCONNECTED`** — Set when the other node and reference node are not in the same tree.
- **`DOMNode::DOCUMENT_POSITION_PRECEDING`** — Set when the other node precedes the reference node.
- **`DOMNode::DOCUMENT_POSITION_FOLLOWING`** — Set when the other node follows the reference node.
- **`DOMNode::DOCUMENT_POSITION_CONTAINS`** — Set when the other node is an ancestor of the reference node.
- **`DOMNode::DOCUMENT_POSITION_CONTAINED_BY`** — Set when the other node is a descendant of the reference node.
- **`DOMNode::DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`** — Set when the result depends on implementation-specific behaviour and may not be portable. This may happen with disconnected nodes or with attribute nodes.

    Properties 
- **`nodeName`** — Returns the most accurate name for the current node type
- **`nodeValue`** — The value of this node, depending on its type. Contrary to the W3C specification, the node value of `DOMElement` nodes is equal to DOMNode::textContent instead of `null`.
- **`nodeType`** — Gets the type of the node. One of the predefined `XML_{*}_NODE` constants
- **`parentNode`** — The parent of this node. If there is no such node, this returns `null`.
- **`parentElement`** — The parent element of this element. If there is no such element, this returns `null`.
- **`childNodes`** — A `DOMNodeList` that contains all children of this node. If there are no children, this is an empty `DOMNodeList`.
- **`firstChild`** — The first child of this node. If there is no such node, this returns `null`.
- **`lastChild`** — The last child of this node. If there is no such node, this returns `null`.
- **`previousSibling`** — The node immediately preceding this node. If there is no such node, this returns `null`.
- **`nextSibling`** — The node immediately following this node. If there is no such node, this returns `null`.
- **`attributes`** — A `DOMNamedNodeMap` containing the attributes of this node (if it is a `DOMElement`) or `null` otherwise.
- **`isConnected`** — Whether the node is connected to a document
- **`ownerDocument`** — The `DOMDocument` object associated with this node, or `null` if this node does not have an associated document (e.g. if it is detached, or if it is a `DOMDocument`).
- **`namespaceURI`** — The namespace URI of this node, or `null` if it is unspecified.
- **`prefix`** — The namespace prefix of this node.
- **`localName`** — Returns the local part of the qualified name of this node.
- **`baseURI`** — The absolute base URI of this node or `null` if the implementation wasn't able to obtain an absolute URI.
- **`textContent`** — The text content of this node and its descendants.

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Method `DOMNode::compareDocumentPosition()` has been added. |
| 8.4.0 | Constants `DOMNode::DOCUMENT_POSITION_DISCONNECTED`, `DOMNode::DOCUMENT_POSITION_PRECEDING`, `DOMNode::DOCUMENT_POSITION_FOLLOWING`, `DOMNode::DOCUMENT_POSITION_CONTAINS`, `DOMNode::DOCUMENT_POSITION_CONTAINED_BY`, and `DOMNode::DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` have been added. |
| 8.3.0 | Methods `DOMNode::contains()`, and `DOMNode::isEqualNode()` have been added. |
| 8.3.0 | Properties DOMNode::$parentElement, and DOMNode::$isConnected have been added. |
| 8.0.0 | The unimplemented methods `DOMNode::compareDocumentPosition()`, `DOMNode::isEqualNode()`, `DOMNode::getFeature()`, `DOMNode::setUserData()` and `DOMNode::getUserData()` have been removed. |

    Notes 
> The DOM extension uses UTF-8 encoding. Use `mb_convert_encoding()`, `UConverter::transcode()`, or `iconv()` to handle other encodings.

     See Also   [W3C specification of Node]()
