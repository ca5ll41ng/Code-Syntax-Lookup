---
id: "en-php-function-dom-attr-isid"
language: "php"
lang: "en"
category: "function"
name: "Dom\\Attr::isId"
title: ""
signature: "public bool Dom\\Attr::isId()"
module: "dom"
source_url: "https://www.php.net/manual/en/dom-attr.isid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dom\Attr::isId

## Description

```php
public bool Dom\Attr::isId()
```



According to the DOM standard this requires a DTD which defines the attribute ID to be of type ID. To utilise this method the document must be validated at parse time by passing `LIBXML_DTDVALID` as an option.

## Parameters

This function has no parameters.

## returnvalues



## Examples

**Dom\Attr::isId() Example**

```php


<?php

// We need to validate our document before referring to the id
$doc = Dom\XMLDocument::createFromFile('examples/book-docbook.xml', LIBXML_DTDVALID);

// We retrieve the attribute named id of the chapter element
$attr = $doc->getElementsByTagName('chapter')->item(0)->getAttributeNode('id');

var_dump($attr->isId()); // bool(true)

?>

   
```
