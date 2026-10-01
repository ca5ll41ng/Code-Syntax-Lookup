---
id: "en-php-function-domnode-appendchild"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::appendChild"
title: "Adds new child at the end of the children"
signature: "public DOMNode|false DOMNode::appendChild(DOMNode $node)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.appendchild.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds new child at the end of the children

## Description

```php
public DOMNode|false DOMNode::appendChild(DOMNode $node)
```

This function appends a child to an existing list of children or creates a new list of children. The child can be created with e.g. `DOMDocument::createElement()`, `DOMDocument::createTextNode()` etc. or simply by using any other node.

When using an existing node it will be moved.

## Parameters

- **`$node`** — The appended child.

## Return Values

The node added or `false` on error.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if this node is readonly or if the previous parent of the node being inserted is readonly.
- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if this node is of a type that does not allow children of the type of the `$node` node, or if the node to append is one of this node's ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if `$node` was created from a different document than the one that created this node.

## Examples

The following example will add a new element node to a fresh document.

**Adding a child**

```php


<?php

$doc = new DOMDocument;

$node = $doc->createElement("para");
$newnode = $doc->appendChild($node);

echo $doc->saveXML();
?>

    
```

**Nested children**

```php


<?php

$doc = new DOMDocument;

$headNode = $doc->createElement("head");
$doc->appendChild($headNode);

$titleNode = $doc->createElement("title");
$headNode->appendChild($titleNode);

echo $doc->saveXML();
?>

    
```

## See Also

`DOMChildNode::after()` `DOMNode::insertBefore()` `DOMNode::removeChild()` `DOMNode::replaceChild()`
