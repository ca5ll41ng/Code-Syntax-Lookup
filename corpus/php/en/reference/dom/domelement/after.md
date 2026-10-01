---
id: "en-php-function-domelement-after"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::after"
title: "Adds nodes after the element"
signature: "public void DOMElement::after(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.after.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds nodes after the element

## Description

```php
public void DOMElement::after(DOMNode|string $nodes)
```

Adds the passed `$nodes` after the element.









## Examples

**`DOMElement::after()` example**

Adds nodes after the hello element.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<hello/>");
$container = $doc->documentElement;

$container->after("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<hello/>
beautiful
<world/>

   
```

## See Also

 `DOMChildNode::after()` `DOMElement::before()`
