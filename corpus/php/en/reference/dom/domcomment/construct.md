---
id: "en-php-function-domcomment-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMComment::__construct"
title: "Creates a new DOMComment object"
signature: "public DOMComment::__construct(string $data = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domcomment.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new DOMComment object

## Description

```php
public DOMComment::__construct(string $data = "")
```

Creates a new `DOMComment` object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writeable node, use `domdocument.createcomment`.

## Parameters

- **`$data`** — The value of the comment.

## Examples

**Creating a new DOMComment**

```php


<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$comment = $element->appendChild(new DOMComment('root comment'));
echo $dom->saveXML(); /* <?xml version="1.0" encoding="iso-8859-1"?><root><!--root comment--></root> */

?>

    
```

## See Also

`DOMDocument::createComment()`
