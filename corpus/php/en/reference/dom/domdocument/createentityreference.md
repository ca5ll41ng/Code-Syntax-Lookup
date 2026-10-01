---
id: "en-php-function-domdocument-createentityreference"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createEntityReference"
title: "Create new entity reference node"
signature: "public DOMEntityReference|false DOMDocument::createEntityReference(string $name)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createentityreference.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new entity reference node

## Description

```php
public DOMEntityReference|false DOMDocument::createEntityReference(string $name)
```

This function creates a new instance of class `DOMEntityReference`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$name`** — The content of the entity reference, e.g. the entity reference minus the leading `&` and the trailing `;` characters.

## Return Values

The new `DOMEntityReference` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INVALID_CHARACTER_ERR`** — Raised if `$name` contains an invalid character.

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createAttributeNS()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
