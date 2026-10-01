---
id: "en-php-function-domelement-replacechildren"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::replaceChildren"
title: "Replace children in element"
signature: "public void DOMElement::replaceChildren(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.replacechildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace children in element

## Description

```php
public void DOMElement::replaceChildren(DOMNode|string $nodes)
```

Replaces the children in the element with new `$nodes`.









## Examples

**`DOMElement::replaceChildren()` example**

Replaces the children with new nodes.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/></container>");
$container = $doc->documentElement;

$container->replaceWith("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
beautiful
<world/>

   
```

## See Also

 `DOMParentNode::replaceChildren()` `DOMElement::replaceWith()` `DOMElement::after()` `DOMElement::before()` `DOMElement::remove()`
