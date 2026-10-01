---
id: "en-php-function-dom-characterdata-remove"
language: "php"
lang: "en"
category: "function"
name: "Dom\\CharacterData::remove"
title: ""
signature: "public void Dom\\CharacterData::remove()"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-characterdata.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dom\CharacterData::remove

## Description

```php
public void Dom\CharacterData::remove()
```







## Examples

**`Dom\CharacterData::remove()` example**

Removes the character data.

```php


<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[hello]]><world/></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->remove();

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<container><world/></container>

   
```

## See Also

 `Dom\ChildNode::remove()` `Dom\CharacterData::after()` `Dom\CharacterData::before()` `Dom\CharacterData::replaceWith()` `Dom\Node::removeChild()`
