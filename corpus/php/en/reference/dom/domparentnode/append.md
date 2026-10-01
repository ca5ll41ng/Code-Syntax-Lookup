---
id: "en-php-function-domparentnode-append"
language: "php"
lang: "en"
category: "function"
name: "DOMParentNode::append"
title: "Appends nodes after the last child node"
signature: "public void DOMParentNode::append(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domparentnode.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends nodes after the last child node

## Description

```php
public void DOMParentNode::append(DOMNode|string $nodes)
```

Appends one or many `$nodes` to the list of children after the last child node.

## Parameters

- **`$nodes`** — The nodes to append. Strings are automatically converted to text nodes.

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

`DOMParentNode::prepend()`
