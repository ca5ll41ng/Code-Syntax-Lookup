---
id: "en-php-function-domcharacterdata-before"
language: "php"
lang: "en"
category: "function"
name: "DOMCharacterData::before"
title: "Adds nodes before the character data"
signature: "public void DOMCharacterData::before(DOMNode|string $nodes)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcharacterdata.before.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds nodes before the character data

## Description

```php
public void DOMCharacterData::before(DOMNode|string $nodes)
```

Adds the passed `$nodes` before the character data.









## Examples

**`DOMCharacterData::before()` example**

Adds nodes before the character data.

```php


<?php
$doc = new DOMDocument;
$doc->loadXML("<container><![CDATA[world]]></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->before("hello", $doc->createElement("beautiful"));

echo $doc->saveXML();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<container>hello<beautiful/><![CDATA[world]]></container>

   
```

## See Also

 `DOMChildNode::before()` `DOMCharacterData::after()`
