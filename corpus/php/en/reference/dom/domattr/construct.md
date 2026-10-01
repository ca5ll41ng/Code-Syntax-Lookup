---
id: "en-php-function-domattr-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMAttr::__construct"
title: "Creates a new `DOMAttr` object"
signature: "public DOMAttr::__construct(string $name, string $value = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domattr.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new `DOMAttr` object

## Description

```php
public DOMAttr::__construct(string $name, string $value = "")
```

Creates a new DOMAttr object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writable node, use `domdocument.createattribute`.

## Parameters

- **`$name`** — The tag name of the attribute.
- **`$value`** — The value of the attribute.

## Examples

**Creating a new `DOMAttr` object**

```php


<?php

$dom = new DOMDocument('1.0', 'utf-8');
$element = $dom->appendChild(new DOMElement('root'));
$attr = $element->setAttributeNode(new DOMAttr('attr', 'attrvalue'));
echo $dom->saveXML(); 

?>

    
```

The above example will output:

```text


<?xml version="1.0" encoding="utf-8"?>
<root attr="attrvalue"/>

    
```

## See Also

`DOMDocument::createAttribute()`
