---
id: "en-php-function-domcharacterdata-remove"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::remove"
title: "Removes the character data node"
signature: "public void DOMCharacterData::remove()"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes the character data node

## Description

```php
public void DOMCharacterData::remove()
```

Removes the character data node.





## Examples

**`DOMCharacterData::remove()` example**

Removes the character data.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[hello]]><world/></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->remove();

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container><world/></container>

   
```

## See Also

 `DOMChildNode::remove()` `DOMCharacterData::after()` `DOMCharacterData::before()` `DOMCharacterData::replaceWith()` `DOMNode::removeChild()`
