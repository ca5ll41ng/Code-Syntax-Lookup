---
id: "en-php-function-domdocumentfragment-appendxml"
language: "php"
lang: "en"
category: "function"
name: "DOMDocumentFragment::appendXML"
title: "Append raw XML data"
signature: "public bool DOMDocumentFragment::appendXML(string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocumentfragment.appendxml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Append raw XML data

## Description

```php
public bool DOMDocumentFragment::appendXML(string $data)
```

Appends raw XML data to a DOMDocumentFragment.

This method is not part of the DOM standard. It was created as a simpler approach for appending an XML DocumentFragment in a DOMDocument.

If you want to stick to the standards, you will have to create a temporary DOMDocument with a dummy root and then loop through the child nodes of the root of your XML data to append them.

## Parameters

- **`$data`** — XML to append.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Appending XML data to your document**

```php


<?php
$doc = new DOMDocument();
$doc->loadXML("<root/>");
$f = $doc->createDocumentFragment();
$f->appendXML("<foo>text</foo><bar>text2</bar>");
$doc->documentElement->appendChild($f);
echo $doc->saveXML(); 
?>

    
```

The above example will output:

```xml


<?xml version="1.0"?>
<root><foo>text</foo><bar>text2</bar></root>

    
```
