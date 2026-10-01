---
id: "en-php-function-domdocument-createdocumentfragment"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createDocumentFragment"
title: "Create new document fragment"
signature: "public DOMDocumentFragment DOMDocument::createDocumentFragment()"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createdocumentfragment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new document fragment

## Description

```php
public DOMDocumentFragment DOMDocument::createDocumentFragment()
```

This function creates a new instance of class `DOMDocumentFragment`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

This function has no parameters.

## Return Values

The new `DOMDocumentFragment`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | In case of an error, a `DomException` is thrown now. Previously, `false` was returned. |

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
