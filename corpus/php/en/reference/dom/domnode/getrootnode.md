---
id: "en-php-function-domnode-getrootnode"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::getRootNode"
title: "Get root node"
signature: "public DOMNode DOMNode::getRootNode(array|null $options = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.getrootnode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get root node

## Description

```php
public DOMNode DOMNode::getRootNode(array|null $options = null)
```

Get root node.

## Parameters

- **`$options`** — This parameter has no effect yet.

## Return Values

Returns the root node.

## Examples

**`DOMNode::getRootNode()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadXML('<?xml version="1.0"?><html><body/></html>');

var_dump($dom->documentElement->firstElementChild->getRootNode() === $dom);
?>

   
```

The above example will output:

```text


bool(true)

   
```
