---
id: "en-php-function-domchildnode-replacewith"
language: "php"
lang: "en"
category: "function"
name: "DOMChildNode::replaceWith"
title: "Replaces the node with new nodes"
signature: "public void DOMChildNode::replaceWith(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domchildnode.replacewith.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces the node with new nodes

## Description

```php
public void DOMChildNode::replaceWith(DOMNode|string $nodes)
```

Replaces the node with new `$nodes`.

## Parameters

- **`$nodes`** — The replacement nodes. Strings are automatically converted to text nodes.

## Return Values

No value is returned.

## Errors/Exceptions

- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if the parent is of a type that does not allow children of the type of one of the passed `$nodes`, or if the node to put in is one of this node&#39;s ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if one of the passed `$nodes` was created from a different document than the one that created this node.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling this method on a node without a parent is now a no-op to align the behaviour with the DOM specification. Previously this threw a `DOMException` with code `DOM_HIERARCHY_REQUEST_ERR`. |

## See Also

`DOMChildNode::after()` `DOMChildNode::before()` `DOMChildNode::remove()` `DOMNode::replaceChild()`
