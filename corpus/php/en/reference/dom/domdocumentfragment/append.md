---
id: "en-php-function-domdocumentfragment-append"
language: "php"
lang: "en"
category: "function"
name: "DOMDocumentFragment::append"
title: "Appends nodes after the last child node"
signature: "public void DOMDocumentFragment::append(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocumentfragment.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Appends nodes after the last child node

## Description

```php
public void DOMDocumentFragment::append(DOMNode|string $nodes)
```

Appends one or many `$nodes` to the list of children after the last child node.









## Examples

**`DOMDocumentFragment::append()` example**

Appends nodes in the fragment.

```php


<?php
$doc = new DOMDocument;
$fragment = $doc->createDocumentFragment();
$fragment->appendChild($doc->createElement("hello"));

$fragment->append("beautiful", $doc->createElement("world"));

echo $doc->saveXML($fragment);
?>

   
```

The above example will output:

```text


<hello/>beautiful<world/>

   
```

## See Also

 `DOMParentNode::append()` `DOMDocumentFragment::prepend()`
