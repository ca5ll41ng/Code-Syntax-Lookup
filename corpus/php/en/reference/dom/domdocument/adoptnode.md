---
id: "en-php-function-domdocument-adoptnode"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::adoptNode"
title: "Transfer a node from another document"
signature: "public DOMNode|false DOMDocument::adoptNode(DOMNode $node)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.adoptnode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transfer a node from another document

## Description

```php
public DOMNode|false DOMDocument::adoptNode(DOMNode $node)
```

Transfer a node from another document into the current document.

## Parameters

- **`$node`** — The node to transfer.

## Return Values

The node that was transferred, or `false` on error.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NOT_SUPPORTED_ERR`** — Raised if the node type is not supported for document transfers.

## Examples

**`DOMDocument::adoptNode()` example**

Transfers the hello element from the first document to the second one.

```php


<?php
$doc1 = new DOMDocument;
$doc1->loadXML("<container><hello><world/></hello></container>");
$hello = $doc1->documentElement->firstChild;

$doc2 = new DOMDocument;
$doc2->loadXML("<root/>");
$doc2->documentElement->appendChild($doc2->adoptNode($hello));

echo $doc1->saveXML() . PHP_EOL . PHP_EOL;
echo $doc2->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container/>

<?xml version="1.0"?>
<root><hello><world/></hello></root>

   
```

## See Also

 `DOMDocument::importNode()`
