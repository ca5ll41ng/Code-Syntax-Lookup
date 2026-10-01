---
id: "en-php-function-domdocumentfragment-replacechildren"
language: "php"
lang: "en"
category: "function"
name: "DOMDocumentFragment::replaceChildren"
title: "Replace children in fragment"
signature: "public void DOMDocumentFragment::replaceChildren(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocumentfragment.replacechildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace children in fragment

## Description

```php
public void DOMDocumentFragment::replaceChildren(DOMNode|string $nodes)
```

Replaces the children in the document fragment with new `$nodes`.









## Examples

**`DOMDocumentFragment::replaceChildren()` example**

Replaces the children with new nodes.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/></container>");
$fragment = $doc->createDocumentFragment();
$fragment->append("hello");

$fragment->replaceChildren("beautiful", $doc->createElement("world"));

echo $doc->saveXML($fragment);
?>

   
```

The above example will output:

```text


beautiful<world/>

   
```

## See Also

 `DOMParentNode::replaceChildren()` `DOMDocumentFragment::append()` `DOMDocumentFragment::prepend()`
