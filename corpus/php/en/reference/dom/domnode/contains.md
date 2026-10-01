---
id: "en-php-function-domnode-contains"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::contains"
title: "Checks if node contains other node"
signature: "public bool DOMNode::contains(DOMNode|DOMNameSpaceNode|null $other)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if node contains other node

## Description

```php
public bool DOMNode::contains(DOMNode|DOMNameSpaceNode|null $other)
```

Checks if node contains `$other` node.

## Parameters

- **`$other`** — Node to be checked.

## Return Values

Returns `true` if node contains `$other` node, `false` otherwise.

## Examples

**`DOMNode::contains()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadXML(<<<XML

<html>
   <body>
       <main>
           <p>Hello, world!</p>
       </main>
   </body>
</html>
XML);

$xpath = new DOMXPath($dom);
$main = $xpath->query("//main")[0];

var_dump($dom->documentElement->contains($main));
?>

   
```

The above example will output:

```text


bool(true)

   
```
