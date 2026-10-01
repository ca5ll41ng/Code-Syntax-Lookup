---
id: "en-php-function-domnode-replacechild"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::replaceChild"
title: "Replaces a child"
signature: "public DOMNode|false DOMNode::replaceChild(DOMNode $node, DOMNode $child)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.replacechild.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces a child

## Description

```php
public DOMNode|false DOMNode::replaceChild(DOMNode $node, DOMNode $child)
```

This function replaces the child `$child` with the passed new node. If the `$node` is already a child it will not be added a second time. If the replacement succeeds the old node is returned.

## Parameters

- **`$node`** — The new node. It must be a member of the target document, i.e. created by one of the DOMDocument->createXXX() methods or imported in the document by `domdocument.importnode`.
- **`$child`** — The old node.

## Return Values

The old node or `false` if an error occur.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if this node is readonly or if the previous parent of the node being inserted is readonly.
- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if this node is of a type that does not allow children of the type of the `$node` node, or if the node to put in is one of this node's ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if `$node` was created from a different document than the one that created this node.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$child` is not a child of this node.

## See Also

`DOMChildNode::replaceWith()` `DOMNode::appendChild()` `DOMNode::removeChild()`
