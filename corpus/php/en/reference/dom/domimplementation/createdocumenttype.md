---
id: "en-php-function-domimplementation-createdocumenttype"
language: "php"
lang: "en"
category: "function"
name: "DOMImplementation::createDocumentType"
title: "Creates an empty DOMDocumentType object"
signature: "public DOMDocumentType|false DOMImplementation::createDocumentType(string $qualifiedName, string $publicId = \"\", string $systemId = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domimplementation.createdocumenttype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates an empty DOMDocumentType object

## Description

```php
public DOMDocumentType|false DOMImplementation::createDocumentType(string $qualifiedName, string $publicId = "", string $systemId = "")
```

Creates an empty `DOMDocumentType` object. Entity declarations and notations are not made available. Entity reference expansions and default attribute additions do not occur.

## Parameters

- **`$qualifiedName`** — The qualified name of the document type to create.
- **`$publicId`** — The external subset public identifier.
- **`$systemId`** — The external subset system identifier.

## Return Values

A new `DOMDocumentType` node with its `ownerDocument` set to `null` or `false` on error.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NAMESPACE_ERR`** — Raised if there is an error with the namespace, as determined by `$qualifiedName`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Calling this function statically will now throw an `Error`. Previously, an `E_DEPRECATED` was raised. |

## Examples

**Creating a document with an attached DTD**

```php

 
<?php

// Creates an instance of the DOMImplementation class
$imp = new DOMImplementation;

// Creates a DOMDocumentType instance
$dtd = $imp->createDocumentType('graph', '', 'graph.dtd');

// Creates a DOMDocument instance
$dom = $imp->createDocument("", "", $dtd);

// Set other properties
$dom->encoding = 'UTF-8';
$dom->standalone = false;

// Create an empty element
$element = $dom->createElement('graph');

// Append the element
$dom->appendChild($element);

// Retrieve and print the document
echo $dom->saveXML();

?>

    
```

The above example will output:

```xml


<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<graph/>

    
```

## See Also

`DOMImplementation::createDocument()`
