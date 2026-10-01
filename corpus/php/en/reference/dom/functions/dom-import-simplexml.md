---
id: "en-php-function-function-dom-import-simplexml"
language: "php"
lang: "en"
category: "function"
name: "dom_import_simplexml"
title: "Gets a `DOMAttr` or `DOMElement` object from a `SimpleXMLElement` object"
signature: "DOMAttr|DOMElement dom_import_simplexml(object $node)"
module: "dom"
source_url: "https://www.php.net/manual/en/function.dom-import-simplexml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a `DOMAttr` or `DOMElement` object from a `SimpleXMLElement` object

## Description

```php
DOMAttr|DOMElement dom_import_simplexml(object $node)
```

This function takes the given attribute or element `$node` (a `SimpleXMLElement` instance) and creates a `DOMAttr` or `DOMElement` node, respectively. The new `DOMNode` refers to the same underlying XML node as the `SimpleXMLElement`.

## Parameters

- **`$node`** — The attribute or element node to import (a `SimpleXMLElement` instance).

## Return Values

The `DOMAttr` or `DOMElement`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function no longer returns `null` on failure. |

## Examples

**Import SimpleXML into DOM with `dom_import_simplexml()`**

```php


<?php

$sxe = simplexml_load_string('<books><book><title>blah</title></book></books>');

if ($sxe === false) {
    echo 'Error while parsing the document';
    exit;
}

$dom_sxe = dom_import_simplexml($sxe);
if (!$dom_sxe) {
    echo 'Error while converting XML';
    exit;
}

$dom = new DOMDocument('1.0');
$dom_sxe = $dom->importNode($dom_sxe, true);
$dom_sxe = $dom->appendChild($dom_sxe);

echo $dom->saveXML();

?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<books><book><title>blah</title></book></books>

   
```

**Import SimpleXML into DOM and modify SimpleXML through DOM**

Error handling omitted for brevity.

```php


<?php

$sxe = simplexml_load_string('<books><book><title>blah</title></book></books>');
$elt = dom_import_simplexml($sxe);
$elt->setAttribute("foo", "bar");
echo $sxe->asXML();

?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<books foo="bar"><book><title>blah</title></book></books>

   
```

## See Also

`simplexml_import_dom()`
