---
id: "en-php-function-domentityreference-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMEntityReference::__construct"
title: "Creates a new DOMEntityReference object"
signature: "public DOMEntityReference::__construct(string $name)"
module: "dom"
source_url: "https://www.php.net/manual/en/domentityreference.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new DOMEntityReference object

## Description

```php
public DOMEntityReference::__construct(string $name)
```

Creates a new `DOMEntityReference` object.

## Parameters

- **`$name`** — The name of the entity reference.

## Examples

**Creating a new DOMEntityReference**

```php


<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$entity = $element->appendChild(new DOMEntityReference('nbsp'));
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?><root></root> */

?>

    
```

## See Also

`DOMDocument::createEntityReference()`
