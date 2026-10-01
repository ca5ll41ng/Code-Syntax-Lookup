---
id: "en-php-function-domnode-insertbefore"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::insertBefore"
title: "Adds a new child before a reference node"
signature: "public DOMNode|false DOMNode::insertBefore(DOMNode $node, DOMNode|null $child = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.insertbefore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a new child before a reference node

## Description

```php
public DOMNode|false DOMNode::insertBefore(DOMNode $node, DOMNode|null $child = null)
```

This function inserts a new node right before the reference node. If you plan to do further modifications on the appended child you must use the returned node.

When using an existing node it will be moved.

## Parameters

- **`$node`** — The new node.
- **`$child`** — The reference node. If not supplied, `$node` is appended to the children.

## Return Values

The inserted node or `false` on error.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if this node is readonly or if the previous parent of the node being inserted is readonly.
- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if this node is of a type that does not allow children of the type of the `$node` node, or if the node to append is one of this node's ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if `$node` was created from a different document than the one that created this node.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$child` is not a child of this node.

## See Also

`DOMNode::appendChild()`
