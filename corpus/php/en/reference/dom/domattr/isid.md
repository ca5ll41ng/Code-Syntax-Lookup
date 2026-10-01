---
id: "en-php-function-domattr-isid"
language: "php"
lang: "en"
category: "function"
name: "DOMAttr::isId"
title: "Checks if attribute is a defined ID"
signature: "public bool DOMAttr::isId()"
module: "dom"
source_url: "https://www.php.net/manual/en/domattr.isid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if attribute is a defined ID

## Description

```php
public bool DOMAttr::isId()
```

This function checks if the attribute is a defined ID.

According to the DOM standard this requires a DTD which defines the attribute ID to be of type ID. You need to validate your document with `domdocument.validate` or DOMDocument::$validateOnParse before using this function.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if this attribute is a defined ID, `false` otherwise.

## Examples

**DOMAttr::isId() Example**

```php


<?php

$doc = new DOMDocument;

// We need to validate our document before referring to the id
$doc->validateOnParse = true;
$doc->load('examples/book-docbook.xml');

// We retrieve the attribute named id of the chapter element
$attr = $doc->getElementsByTagName('chapter')->item(0)->getAttributeNode('id');

var_dump($attr->isId()); // bool(true)

?>

    
```
