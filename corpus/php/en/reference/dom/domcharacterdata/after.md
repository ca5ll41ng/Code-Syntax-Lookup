---
id: "en-php-function-domcharacterdata-after"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::after"
title: "Adds nodes after the character data"
signature: "public void DOMCharacterData::after(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.after.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds nodes after the character data

## Description

```php
public void DOMCharacterData::after(DOMNode|string $nodes)
```

Adds the passed `$nodes` after the character data.









## Examples

**`DOMCharacterData::after()` example**

Adds nodes after the character data.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[hello]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->after("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container><![CDATA[hello]]>beautiful<world/></container>

   
```

## See Also

 `DOMChildNode::after()` `DOMCharacterData::before()`
