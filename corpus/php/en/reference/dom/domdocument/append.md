---
id: "en-php-function-domdocument-append"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::append"
title: "Appends nodes after the last child node"
signature: "public void DOMDocument::append(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends nodes after the last child node

## Description

```php
public void DOMDocument::append(DOMNode|string $nodes)
```

Appends one or many `$nodes` to the list of children after the last child node.









## Examples

**`DOMDocument::append()` example**

Adds nodes after the document root.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<hello/>");

$doc->append("beautiful", $doc->createElement("world"));

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

 `DOMParentNode::append()` `DOMDocument::prepend()`
