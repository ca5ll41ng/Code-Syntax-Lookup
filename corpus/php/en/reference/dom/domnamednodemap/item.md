---
id: "en-php-function-domnamednodemap-item"
language: "php"
lang: "en"
category: "function"
name: "DOMNamedNodeMap::item"
title: "Retrieves a node specified by index"
signature: "public DOMNode|null DOMNamedNodeMap::item(int $index)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnamednodemap.item.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a node specified by index

## Description

```php
public DOMNode|null DOMNamedNodeMap::item(int $index)
```

Retrieves a node specified by `$index` within the `DOMNamedNodeMap` object.

## Parameters

- **`$index`** — Index into this map.

## Return Values

The node at the `$index`th position in the map, or `null` if that is not a valid index (greater than or equal to the number of nodes in this map).
