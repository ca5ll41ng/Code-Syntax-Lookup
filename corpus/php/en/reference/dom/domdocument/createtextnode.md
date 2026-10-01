---
id: "en-php-function-domdocument-createtextnode"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createTextNode"
title: "Create new text node"
signature: "public DOMText DOMDocument::createTextNode(string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createtextnode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new text node

## Description

```php
public DOMText DOMDocument::createTextNode(string $data)
```

This function creates a new instance of class `DOMText`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$data`** — The content of the text.

## Return Values

The new `DOMText`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | In case of an error, a `DomException` is thrown now. Previously, `false` was returned. |

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()`
