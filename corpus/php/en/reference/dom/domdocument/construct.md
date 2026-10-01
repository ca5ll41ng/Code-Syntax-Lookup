---
id: "en-php-function-domdocument-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::__construct"
title: "Creates a new DOMDocument object"
signature: "public DOMDocument::__construct(string $version = \"1.0\", string $encoding = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new DOMDocument object

## Description

```php
public DOMDocument::__construct(string $version = "1.0", string $encoding = "")
```

Creates a new `DOMDocument` object.

## Parameters

- **`$version`** — The version number of the document as part of the XML declaration.
- **`$encoding`** — The encoding of the document as part of the XML declaration.

## Examples

**Creating a new DOMDocument**

```php


<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');

echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?> */

?>

    
```

## See Also

`DOMImplementation::createDocument()`
