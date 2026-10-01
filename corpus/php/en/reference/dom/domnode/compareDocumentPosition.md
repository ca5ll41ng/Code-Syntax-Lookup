---
id: "en-php-function-domnode-comparedocumentposition"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::compareDocumentPosition"
title: "Compares the position of two nodes"
signature: "public int DOMNode::compareDocumentPosition(DOMNode $other)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.comparedocumentposition.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares the position of two nodes

## Description

```php
public int DOMNode::compareDocumentPosition(DOMNode $other)
```

Compares the position of the other node relative to this node.

## Parameters

- **`$other`** — The node for which the position should be compared for, relative to this node.

## Return Values

A bitmask of the `DOMNode::DOCUMENT_POSITION_{*}` constants.

## Examples

**`DOMNode::compareDocumentPosition()` example**

```php


<?php
$xml = <<<XML
<root>
    <child1/>
    <child2/>
</root>
XML;

$dom = new DOMDocument();
$dom->loadXML($xml);

$root = $dom->documentElement;
$child1 = $root->firstElementChild;
$child2 = $child1->nextElementSibling;

var_dump($root->compareDocumentPosition($child1));
var_dump($child2->compareDocumentPosition($child1));
?>

   
```

The above example will output:

```text


int(20) // This is DOMNode::DOCUMENT_POSITION_CONTAINED_BY | DOMNode::DOCUMENT_POSITION_FOLLOWING
int(2)  // This is DOMNode::DOCUMENT_POSITION_PRECEDING

   
```
