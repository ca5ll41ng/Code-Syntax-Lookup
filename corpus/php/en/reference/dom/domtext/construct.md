---
id: "en-php-function-domtext-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMText::__construct"
title: "Creates a new `DOMText` object"
signature: "public DOMText::__construct(string $data = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domtext.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new `DOMText` object

## Description

```php
public DOMText::__construct(string $data = "")
```

Creates a new `DOMText` object.

## Parameters

- **`$data`** — The value of the text node. If not supplied an empty text node is created.

## Examples

**Creating a new DOMText**

```php


<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$text = $element->appendChild(new DOMText('root value'));
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?><root>root value</root> */

?>

    
```

## See Also

`DOMDocument::createTextNode()`
