---
id: "en-php-function-domdocument-prepend"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::prepend"
title: "Prepends nodes before the first child node"
signature: "public void DOMDocument::prepend(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepends nodes before the first child node

## Description

```php
public void DOMDocument::prepend(DOMNode|string $nodes)
```

Prepends one or many `$nodes` to the list of children before the first child node.









## Examples

**`DOMDocument::prepend()` example**

Adds nodes before the document root.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<world/>");

$doc->prepend($doc->createElement("hello"), "beautiful");

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<hello/>
beautiful
<world/>

   
```

## See Also

 `DOMParentNode::prepend()` `DOMDocument::append()`
