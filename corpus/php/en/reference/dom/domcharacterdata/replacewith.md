---
id: "en-php-function-domcharacterdata-replacewith"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::replaceWith"
title: "Replaces the character data with new nodes"
signature: "public void DOMCharacterData::replaceWith(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.replacewith.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces the character data with new nodes

## Description

```php
public void DOMCharacterData::replaceWith(DOMNode|string $nodes)
```

Replaces the character data with new `$nodes`.









## Examples

**`DOMCharacterData::replaceWith()` example**

Replaces the character data with new nodes.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[hello]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->replaceWith("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container>beautiful<world/></container>

   
```

## See Also

 `DOMChildNode::replaceWith()` `DOMCharacterData::after()` `DOMCharacterData::before()` `DOMCharacterData::remove()`
