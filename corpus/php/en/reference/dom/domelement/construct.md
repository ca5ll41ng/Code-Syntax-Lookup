---
id: "en-php-function-domelement-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::__construct"
title: "Creates a new DOMElement object"
signature: "public DOMElement::__construct(string $qualifiedName, string|null $value = null, string $namespace = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new DOMElement object

## Description

```php
public DOMElement::__construct(string $qualifiedName, string|null $value = null, string $namespace = "")
```

Creates a new `DOMElement` object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writeable node, use `domdocument.createelement` or `domdocument.createelementns`.

## Parameters

- **`$qualifiedName`** — The tag name of the element. When also passing in namespaceURI, the element name may take a prefix to be associated with the URI.
- **`$value`** — The value of the element.
- **`$namespace`** — A namespace URI to create the element within a specific namespace.

## Examples

**Creating a new DOMElement**

```php


<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$element_ns = new DOMElement('pr:node1', 'thisvalue', 'http://xyz');
$element->appendChild($element_ns);
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?>
<root><pr:node1 xmlns:pr="http://xyz">thisvalue</pr:node1></root> */

?>

    
```

## See Also

`DOMDocument::createElement()` `DOMDocument::createElementNS()`
