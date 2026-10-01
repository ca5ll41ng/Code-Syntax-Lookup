---
id: "en-php-function-domelement-before"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::before"
title: "Adds nodes before the element"
signature: "public void DOMElement::before(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.before.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds nodes before the element

## Description

```php
public void DOMElement::before(DOMNode|string $nodes)
```

Adds the passed `$nodes` before the element.









## Examples

**`DOMElement::before()` example**

Adds nodes before the hello element.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<world/>");
$world = $doc->documentElement;

$world->before("hello", $doc->createElement("beautiful"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
hello
<beautiful/>
<world/>

   
```

## See Also

 `DOMChildNode::before()` `DOMElement::after()`
