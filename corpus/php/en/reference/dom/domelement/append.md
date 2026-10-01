---
id: "en-php-function-domelement-append"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::append"
title: "Appends nodes after the last child node"
signature: "public void DOMElement::append(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends nodes after the last child node

## Description

```php
public void DOMElement::append(DOMNode|string $nodes)
```

Appends one or many `$nodes` to the list of children after the last child node.









## Examples

**`DOMElement::append()` example**

Appends nodes in the container element.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container>hello </container>");
$world = $doc->documentElement;

$world->append("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container>hello beautiful<world/></container>

   
```

## See Also

 `DOMParentNode::append()` `DOMElement::prepend()`
