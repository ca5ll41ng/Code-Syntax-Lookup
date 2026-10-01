---
id: "en-php-function-function-dom-ns-import-simplexml"
language: "php"
lang: "en"
category: "function"
name: "Dom\\import_simplexml"
title: "Gets a `Dom\\Attr` or `Dom\\Element` object from a `SimpleXMLElement` object"
signature: "Dom\\Attr|Dom\\Element Dom\\import_simplexml(object $node)"
module: "dom"
source_url: "https://www.php.net/manual/en/function.dom-ns-import-simplexml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a `Dom\Attr` or `Dom\Element` object from a `SimpleXMLElement` object

## Description

```php
Dom\Attr|Dom\Element Dom\import_simplexml(object $node)
```

This function takes the given attribute or element `$node` (a `SimpleXMLElement` instance) and creates a `Dom\Attr` or `Dom\Element` node, respectively. The new `Dom\Node` refers to the same underlying XML node as the `SimpleXMLElement`.

## parameters



## Return Values

The `Dom\Attr` or `Dom\Element`.

## Examples

**Import SimpleXML into DOM and modify SimpleXML through DOM**

Error handling omitted for brevity.

```php


<?php

$sxe = simplexml_load_string('<books><book><title>blah</title></book></books>');
$elt = Dom\import_simplexml($sxe);
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
