---
id: "en-php-function-domdocumentfragment-prepend"
language: "php"
lang: "en"
category: "function"
name: "DOMDocumentFragment::prepend"
title: "Prepends nodes before the first child node"
signature: "public void DOMDocumentFragment::prepend(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocumentfragment.prepend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepends nodes before the first child node

## Description

```php
public void DOMDocumentFragment::prepend(DOMNode|string $nodes)
```

Prepends one or many `$nodes` to the list of children before the first child node.









## Examples

**`DOMDocumentFragment::prepend()` example**

Prepends nodes before the fragment root.

```php


<?php
$doc = new DOMDocument;
$fragment = $doc->createDocumentFragment();
$fragment->appendChild($doc->createElement("world"));

$fragment->prepend($doc->createElement("hello"), "beautiful");

echo $doc->saveXML($fragment);
?>

   
```

The above example will output:

```text


<hello/>beautiful<world/>

   
```

## See Also

 `DOMParentNode::prepend()` `DOMDocumentFragment::append()`
