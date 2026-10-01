---
id: "en-php-function-domelement-getattributenames"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getAttributeNames"
title: "Get attribute names"
signature: "public array DOMElement::getAttributeNames()"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getattributenames.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get attribute names

## Description

```php
public array DOMElement::getAttributeNames()
```

Get attribute names.

## Parameters

This function has no parameters.

## Return Values

Return attribute names.

## Examples

**`DOMElement::getAttributeNames()` example**

```php


<?php

$dom = new DOMDocument();
$dom->loadXML('<html xmlns:some="some:ns" some:test="a" test2="b"/>');
var_dump($dom->documentElement->getAttributeNames());
?>

   
```

The above example will output:

```text


array(3) {
  [0]=>
  string(10) "xmlns:some"
  [1]=>
  string(9) "some:test"
  [2]=>
  string(5) "test2"
}

   
```
