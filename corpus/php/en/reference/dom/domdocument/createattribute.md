---
id: "en-php-function-domdocument-createattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createAttribute"
title: "Create new attribute"
signature: "public DOMAttr|false DOMDocument::createAttribute(string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new attribute

## Description

```php
public DOMAttr|false DOMDocument::createAttribute(string $localName)
```

This function creates a new instance of class `DOMAttr`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$localName`** — The name of the attribute.

## Return Values

The new `DOMAttr` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INVALID_CHARACTER_ERR`** — Raised if `$localName` contains an invalid character.

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
