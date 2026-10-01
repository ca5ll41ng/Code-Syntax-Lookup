---
id: "en-php-function-domdocument-createcdatasection"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createCDATASection"
title: "Create new cdata node"
signature: "public DOMCdataSection|false DOMDocument::createCDATASection(string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createcdatasection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new cdata node

## Description

```php
public DOMCdataSection|false DOMDocument::createCDATASection(string $data)
```

This function creates a new instance of class `DOMCDATASection`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$data`** — The content of the cdata.

## Return Values

The new `DOMCDATASection` or `false` if an error occurred.

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
