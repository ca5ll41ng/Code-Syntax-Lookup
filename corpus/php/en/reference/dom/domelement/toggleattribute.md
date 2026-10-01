---
id: "en-php-function-domelement-toggleattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::toggleAttribute"
title: "Toggle attribute"
signature: "public bool DOMElement::toggleAttribute(string $qualifiedName, bool|null $force = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.toggleattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Toggle attribute

## Description

```php
public bool DOMElement::toggleAttribute(string $qualifiedName, bool|null $force = null)
```

Toggle the attribute.

## Parameters

- **`$qualifiedName`** — The qualified name of the attribute.
- **`$force`** — if `null`, the function will toggle the attribute. if `true`, the function adds the attribute. if `false`, the function removes the attribute.

## Return Values

Returns `true` if the attribute is present after finishing the call, `false` otherwise.

## Examples

**`DOMElement::toggleAttribute()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadXML("<?xml version='1.0'?><container selected=\"\"/>");

var_dump($dom->documentElement->toggleAttribute('selected'));
echo $dom->saveXML() . PHP_EOL;

var_dump($dom->documentElement->toggleAttribute('selected'));
echo $dom->saveXML();
?>

   
```

The above example will output:

```text


bool(false)
<?xml version="1.0"?>
<container/>

bool(true)
<?xml version="1.0"?>
<container selected=""/>

   
```
