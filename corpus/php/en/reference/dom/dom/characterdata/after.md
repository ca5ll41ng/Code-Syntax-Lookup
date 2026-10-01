---
id: "en-php-function-dom-characterdata-after"
language: "php"
lang: "en"
category: "function"
name: "Dom\\CharacterData::after"
title: ""
signature: "public void Dom\\CharacterData::after(Dom\\Node|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-characterdata.after.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dom\CharacterData::after

## Description

```php
public void Dom\CharacterData::after(Dom\Node|string $nodes)
```









## Examples

**`Dom\CharacterData::after()` example**

Adds nodes after the character data.

```php


<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[hello]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->after("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<container><![CDATA[hello]]>beautiful<world/></container>

   
```

## See Also

 `Dom\ChildNode::after()` `Dom\CharacterData::before()`
