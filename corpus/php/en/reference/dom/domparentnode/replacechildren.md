---
id: "en-php-function-domparentnode-replacechildren"
language: "php"
lang: "en"
category: "function"
name: "DOMParentNode::replaceChildren"
title: "Replace children in node"
signature: "public void DOMParentNode::replaceChildren(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domparentnode.replacechildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace children in node

## Description

```php
public void DOMParentNode::replaceChildren(DOMNode|string $nodes)
```

Replace children in node.

## Parameters

- **`$nodes`** — The nodes replacing the children. Strings are automatically converted to text nodes.

## Return Values

No value is returned.

## Errors/Exceptions

- **`DOM_HIERARCHY_REQUEST_ERR`** — Raised if this node is of a type that does not allow children of the type of one of the passed `$nodes`, or if the node to put in is one of this node&#39;s ancestors or this node itself.
- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if one of the passed `$nodes` was created from a different document than the one that created this node.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling this method on a node without an owner document now works. Previously this threw a `DOMException` with code `DOM_HIERARCHY_REQUEST_ERR`. |

## Examples

**`DOMParentNode::replaceChildren()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadHTML('<html><p>hi</p> test <p>hi2</p></html>');

$dom->documentElement->replaceChildren('foo', $dom->createElement('p'), 'bar');
echo $dom->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0" standalone="yes"?>

<html>foo<p/>bar</html>

   
```
