---
id: "en-php-function-domelement-prepend"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::prepend"
title: "Prepends nodes before the first child node"
signature: "public void DOMElement::prepend(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepends nodes before the first child node

## Description

```php
public void DOMElement::prepend(DOMNode|string $nodes)
```

Prepends one or many `$nodes` to the list of children before the first child node.









## Examples

**`DOMElement::prepend()` example**

Prepends nodes in the container element.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container> world</container>");
$world = $doc->documentElement;

$world->prepend($doc->createElement("hello"), "beautiful");

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container><hello/>beautiful world</container>

   
```

## See Also

 `DOMParentNode::prepend()` `DOMElement::append()`
