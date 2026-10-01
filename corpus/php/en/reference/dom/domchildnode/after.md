---
id: "en-php-function-domchildnode-after"
language: "php"
lang: "en"
category: "function"
name: "DOMChildNode::after"
title: "Adds nodes after the node"
signature: "public void DOMChildNode::after(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domchildnode.after.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds nodes after the node

## Description

```php
public void DOMChildNode::after(DOMNode|string $nodes)
```

Adds the passed `$nodes` after the node.

## Parameters

- **`$nodes`** — Nodes to be added after the node. Strings are automatically converted to text nodes.

## Return Values

No value is returned.

## Errors/Exceptions

- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if the parent is of a type that does not allow children of the type of one of the passed `$nodes`, or if the node to put in is one of this node&#39;s ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if one of the passed `$nodes` was created from a different document than the one that created this node.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling this method on a node without a parent is now a no-op to align the behaviour with the DOM specification. Previously this threw a `DOMException` with code `DOM_HIERARCHY_REQUEST_ERR`. |
| 8.3.0 | Calling this method on a node without an owner document now works. Previously this threw a `DOMException` with code `DOM_HIERARCHY_REQUEST_ERR`. |

## See Also

`DOMChildNode::before()` `DOMChildNode::remove()` `DOMChildNode::replaceWith()` `DOMNode::appendChild()`
