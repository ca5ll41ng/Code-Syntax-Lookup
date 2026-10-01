---
id: "en-php-function-domnamednodemap-getnameditemns"
language: "php"
lang: "en"
category: "function"
name: "DOMNamedNodeMap::getNamedItemNS"
title: "Retrieves a node specified by local name and namespace URI"
signature: "public DOMNode|null DOMNamedNodeMap::getNamedItemNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnamednodemap.getnameditemns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a node specified by local name and namespace URI

## Description

```php
public DOMNode|null DOMNamedNodeMap::getNamedItemNS(string|null $namespace, string $localName)
```

Retrieves a node specified by `$localName` and `$namespace`.

## Parameters

- **`$namespace`** — The namespace URI of the node to retrieve.
- **`$localName`** — The local name of the node to retrieve.

## Return Values

A node (of any type) with the specified local name and namespace URI, or `null` if no node is found.

## See Also

`DOMNamedNodeMap::getNamedItem()`
