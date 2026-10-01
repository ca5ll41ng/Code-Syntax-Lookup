---
id: "en-php-function-domdocument-createcomment"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createComment"
title: "Create new comment node"
signature: "public DOMComment DOMDocument::createComment(string $data)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createcomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new comment node

## Description

```php
public DOMComment DOMDocument::createComment(string $data)
```

This function creates a new instance of class `DOMComment`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$data`** — The content of the comment.

## Return Values

The new `DOMComment`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | In case of an error, a `DomException` is thrown now. Previously, `false` was returned. |

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
