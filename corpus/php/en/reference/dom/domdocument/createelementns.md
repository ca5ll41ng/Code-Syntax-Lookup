---
id: "en-php-function-domdocument-createelementns"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createElementNS"
title: "Create new element node with an associated namespace"
signature: "public DOMElement|false DOMDocument::createElementNS(string|null $namespace, string $qualifiedName, string $value = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createelementns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new element node with an associated namespace

## Description

```php
public DOMElement|false DOMDocument::createElementNS(string|null $namespace, string $qualifiedName, string $value = "")
```

This function creates a new element node with an associated namespace. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$namespace`** — The URI of the namespace.
- **`$qualifiedName`** — The qualified name of the element, as `prefix:tagname`.
- **`$value`** — The value of the element. By default, an empty element will be created. You can also set the value later with DOMElement::$nodeValue.

## Return Values

The new `DOMElement` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INVALID_CHARACTER_ERR`** — Raised if `$qualifiedName` contains an invalid character.
- **`DOM_NAMESPACE_ERR`** — Raised if `$qualifiedName` is a malformed qualified name.

## Examples

**Creating a new element and inserting it as root**

```php


<?php

$dom = new DOMDocument('1.0', 'utf-8');

$element = $dom->createElementNS('http://www.example.com/XFoo', 'xfoo:test', 'This is the root element!');

// We insert the new element as root (child of the document)
$dom->appendChild($element);

echo $dom->saveXML();
?>

    
```

The above example will output:

```xml


<?xml version="1.0" encoding="utf-8"?>
<xfoo:test xmlns:xfoo="http://www.example.com/XFoo">This is the root element!</xfoo:test>

    
```

**A namespace prefix example**

```php


<?php
$doc  = new DOMDocument('1.0', 'utf-8');
$doc->formatOutput = true;
$root = $doc->createElementNS('http://www.w3.org/2005/Atom', 'element');
$doc->appendChild($root);
$root->setAttributeNS('http://www.w3.org/2000/xmlns/' ,'xmlns:g', 'http://base.google.com/ns/1.0');
$item = $doc->createElementNS('http://base.google.com/ns/1.0', 'g:item_type', 'house');
$root->appendChild($item);

echo $doc->saveXML(), "\n";

echo $item->namespaceURI, "\n"; // Outputs: http://base.google.com/ns/1.0
echo $item->prefix, "\n";       // Outputs: g
echo $item->localName, "\n";    // Outputs: item_type
?>

    
```

The above example will output:

```xml


<?xml version="1.0" encoding="utf-8"?>
<element xmlns="http://www.w3.org/2005/Atom" xmlns:g="http://base.google.com/ns/1.0">
  <g:item_type>house</g:item_type>
</element>

http://base.google.com/ns/1.0
g
item_type

    
```

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
