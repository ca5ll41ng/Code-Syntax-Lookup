---
id: "en-php-function-domtext-splittext"
language: "php"
lang: "en"
category: "function"
name: "DOMText::splitText"
title: "Breaks this node into two nodes at the specified offset"
signature: "public DOMText|false DOMText::splitText(int $offset)"
module: "dom"
source_url: "https://www.php.net/manual/en/domtext.splittext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Breaks this node into two nodes at the specified offset

## Description

```php
public DOMText|false DOMText::splitText(int $offset)
```

Breaks this node into two nodes at the specified `$offset`, keeping both in the tree as siblings.

After being split, this node will contain all the content up to the `$offset`. If the original node had a parent node, the new node is inserted as the next sibling of the original node. When the `$offset` is equal to the length of this node, the new node has no data.

## Parameters

- **`$offset`** — The offset at which to split, starting from 0.

## Return Values

The new node of the same type, which contains all the content at and after the `$offset`.
