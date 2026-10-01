---
id: "en-php-function-dom-characterdata-replacewith"
language: "php"
lang: "en"
category: "function"
name: "Dom\\CharacterData::replaceWith"
title: ""
signature: "public void Dom\\CharacterData::replaceWith(Dom\\Node|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-characterdata.replacewith.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dom\CharacterData::replaceWith

## Description

```php
public void Dom\CharacterData::replaceWith(Dom\Node|string $nodes)
```









## Examples

**`Dom\CharacterData::replaceWith()` example**

Replaces the character data with new nodes.

```php


<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[hello]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->replaceWith("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<container>beautiful<world/></container>

   
```

## See Also

 `Dom\ChildNode::replaceWith()` `Dom\CharacterData::after()` `Dom\CharacterData::before()` `Dom\CharacterData::remove()`
