---
id: "en-php-function-domprocessinginstruction-construct"
language: "php"
lang: "en"
category: "function"
name: "DOMProcessingInstruction::__construct"
title: "Creates a new `DOMProcessingInstruction` object"
signature: "public DOMProcessingInstruction::__construct(string $name, string $value = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domprocessinginstruction.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new `DOMProcessingInstruction` object

## Description

```php
public DOMProcessingInstruction::__construct(string $name, string $value = "")
```

Creates a new `DOMProcessingInstruction` object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writeable node, use `domdocument.createprocessinginstruction`.

## Parameters

- **`$name`** — The tag name of the processing instruction.
- **`$value`** — The value of the processing instruction.

## Examples

**Creating a new `DOMProcessingInstruction` object**

```php


<?php

$dom = new DOMDocument('1.0', 'UTF-8');
$html = $dom->appendChild(new DOMElement('html'));
$body = $html->appendChild(new DOMElement('body'));
$pinode = new DOMProcessingInstruction('php', 'echo "Hello World"; ');
$body->appendChild($pinode);
echo $dom->saveXML(); 

?>

    
```

The above example will output:

```xml


<?xml version="1.0" encoding="UTF-8"?>
<html><body><?php echo "Hello World"; ?></body></html>

    
```

## See Also

`DOMDocument::createProcessingInstruction()`
