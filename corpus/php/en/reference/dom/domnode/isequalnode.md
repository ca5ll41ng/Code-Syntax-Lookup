---
id: "en-php-function-domnode-isequalnode"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::isEqualNode"
title: "Checks that both nodes are equal"
signature: "public bool DOMNode::isEqualNode(DOMNode|null $otherNode)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.isequalnode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks that both nodes are equal

## Description

```php
public bool DOMNode::isEqualNode(DOMNode|null $otherNode)
```

Checks that both nodes are equal.

## Parameters

- **`$otherNode`** — The node.

## Return Values

Returns `true` if both nodes are equal, `false` otherwise.

## Examples

**`DOMNode::isEqualNode()` example**

```php


<?php

$dom1 = (new DOMDocument())->createElement('h1', 'Hello World!');
$dom2 = (new DOMDocument())->createElement('h1', 'Hello World!');

var_dump($dom1->isEqualNode($dom2));
?>

   
```

The above example will output:

```text


bool(true)

   
```
