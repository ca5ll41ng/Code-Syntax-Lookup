---
id: "en-php-function-domcdatasection-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMCdataSection::__construct"
title: "Constructs a new DOMCdataSection object"
signature: "public DOMCdataSection::__construct(string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domcdatasection.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new DOMCdataSection object

## Description

```php
public DOMCdataSection::__construct(string $data)
```

Constructs a new CDATA node. This works like the `DOMText` class.

## Parameters

- **`$data`** — The value of the CDATA node. If not supplied, an empty CDATA node is created.

## Examples

**Creating a new DOMCdataSection object**

```php


<?php

$dom = new DOMDocument('1.0', 'utf-8');
$element = $dom->appendChild(new DOMElement('root'));
$text = $element->appendChild(new DOMCdataSection('root value'));
echo $dom->saveXML();

?>

    
```

The above example will output:

 Warning: Crazy CDATA markup. Please DO NOT BREAK it. 

```text


<?xml version="1.0" encoding="utf-8"?>
<root><![CDATA[root value]]></root>

    
```

## See Also

`DOMText::__construct()` `DOMDocument::createTextNode()`
