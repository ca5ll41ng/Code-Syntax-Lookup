---
id: "en-php-function-domnode-issamenode"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::isSameNode"
title: "Indicates if two nodes are the same node"
signature: "public bool DOMNode::isSameNode(DOMNode $otherNode)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.issamenode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates if two nodes are the same node

## Description

```php
public bool DOMNode::isSameNode(DOMNode $otherNode)
```

This function indicates if two nodes are the same node. The comparison is *not* based on content

## Parameters

- **`$otherNode`** — The compared node.

## Return Values

Returns `true` on success or `false` on failure.
