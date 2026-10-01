---
id: "en-php-function-domelement-remove"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::remove"
title: "Removes the element"
signature: "public void DOMElement::remove()"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes the element

## Description

```php
public void DOMElement::remove()
```

Removes the element.





## Examples

**`DOMElement::remove()` example**

Removes the element.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/><world/></container>");
$hello = $doc->documentElement->firstChild;

$hello->remove();

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container><world/></container>

   
```

## See Also

 `DOMElement::after()` `DOMElement::before()` `DOMElement::replaceWith()` `DOMNode::removeChild()`
