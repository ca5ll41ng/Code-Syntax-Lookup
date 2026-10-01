---
id: "en-php-function-dom-characterdata-before"
language: "php"
lang: "en"
category: "function"
name: "Dom\\CharacterData::before"
title: ""
signature: "public void Dom\\CharacterData::before(Dom\\Node|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-characterdata.before.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dom\CharacterData::before

## Description

```php
public void Dom\CharacterData::before(Dom\Node|string $nodes)
```









## Examples

**`Dom\CharacterData::before()` example**

Adds nodes before the character data.

```php


<?php
$doc = Dom\XMLDocument::createFromString("<container><![CDATA[world]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->before("hello", $doc->createElement("beautiful"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<container>hello<beautiful/><![CDATA[world]]></container>

   
```

## See Also

 `Dom\ChildNode::before()` `Dom\CharacterData::after()`
