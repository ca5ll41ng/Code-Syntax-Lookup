---
id: "en-php-function-domelement-replacewith"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::replaceWith"
title: "Replaces the element with new nodes"
signature: "public void DOMElement::replaceWith(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.replacewith.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces the element with new nodes

## Description

```php
public void DOMElement::replaceWith(DOMNode|string $nodes)
```

Replaces the element with new `$nodes`.









## Examples

**`DOMElement::replaceWith()` example**

Replaces the element with new nodes.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->replaceWith("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container>beautiful<world/></container>

   
```

## See Also

 `DOMChildNode::replaceWith()` `DOMElement::replaceChildren()` `DOMElement::after()` `DOMElement::before()` `DOMElement::remove()`
