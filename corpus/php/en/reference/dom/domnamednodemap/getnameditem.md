---
id: "en-php-function-domnamednodemap-getnameditem"
language: "php"
lang: "en"
category: "function"
name: "DOMNamedNodeMap::getNamedItem"
title: "Retrieves a node specified by name"
signature: "public DOMNode|null DOMNamedNodeMap::getNamedItem(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnamednodemap.getnameditem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a node specified by name

## Description

```php
public DOMNode|null DOMNamedNodeMap::getNamedItem(string $qualifiedName)
```

Retrieves a node specified by its `nodeName`.

## Parameters

- **`$qualifiedName`** — The `nodeName` of the node to retrieve.

## Return Values

A node (of any type) with the specified `nodeName`, or `null` if no node is found.

## Examples

**Getting an attribute on a node**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book.xml');

$id = $doc->firstChild->nextSibling->nextSibling->firstChild->nextSibling->attributes->getNamedItem('id');
?>

   
```

**Accessing attribute with array syntax**

```php


<?php
$doc = new DOMDocument;
$doc->load('examples/book.xml');


$id = $doc->firstChild->nextSibling->nextSibling->firstChild->nextSibling->attributes['id'];
?>

   
```

## See Also

 `DOMNamedNodeMap::getNamedItemNS()`
