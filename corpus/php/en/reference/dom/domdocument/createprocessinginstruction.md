---
id: "en-php-function-domdocument-createprocessinginstruction"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createProcessingInstruction"
title: "Creates new PI node"
signature: "public DOMProcessingInstruction|false DOMDocument::createProcessingInstruction(string $target, string $data = \"\")"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createprocessinginstruction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates new PI node

## Description

```php
public DOMProcessingInstruction|false DOMDocument::createProcessingInstruction(string $target, string $data = "")
```

This function creates a new instance of class `DOMProcessingInstruction`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$target`** — The target of the processing instruction.
- **`$data`** — The content of the processing instruction.

## Return Values

The new `DOMProcessingInstruction` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INVALID_CHARACTER_ERR`** — Raised if `$target` contains an invalid character.

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createTextNode()`
