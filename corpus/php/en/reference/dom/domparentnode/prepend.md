---
id: "en-php-function-domparentnode-prepend"
language: "php"
lang: "en"
category: "function"
name: "DOMParentNode::prepend"
title: "Prepends nodes before the first child node"
signature: "public void DOMParentNode::prepend(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domparentnode.prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepends nodes before the first child node

## Description

```php
public void DOMParentNode::prepend(DOMNode|string $nodes)
```

Prepends one or many `$nodes` to the list of children before the first child node.

## Parameters

- **`$nodes`** — The nodes to prepend. Strings are automatically converted to text nodes.

## Return Values

No value is returned.

## Errors/Exceptions

- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if this node is of a type that does not allow children of the type of one of the passed `$nodes`, or if the node to put in is one of this node&#39;s ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if one of the passed `$nodes` was created from a different document than the one that created this node.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling this method on a node without an owner document now works. Previously this threw a `DOMException` with code `DOM_HIERARCHY_REQUEST_ERR`. |

## See Also

`DOMParentNode::append()`
