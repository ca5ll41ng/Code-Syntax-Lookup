---
id: "en-php-function-domdocument-replacechildren"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::replaceChildren"
title: "Replace children in document"
signature: "public void DOMDocument::replaceChildren(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.replacechildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace children in document

## Description

```php
public void DOMDocument::replaceChildren(DOMNode|string $nodes)
```

Replaces the children in the document with new `$nodes`.









## Examples

**`DOMDocument::replaceChildren()` example**

Replaces the children with new nodes.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/></container>");

$doc->replaceChildren("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
beautiful
<world/>

   
```

## See Also

 `DOMParentNode::replaceChildren()` `DOMDocument::append()` `DOMDocument::prepend()`
