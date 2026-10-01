---
id: "en-php-function-domelement-setidattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::setIdAttribute"
title: "Declares the attribute specified by name to be of type ID"
signature: "public void DOMElement::setIdAttribute(string $qualifiedName, bool $isId)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.setidattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Declares the attribute specified by name to be of type ID

## Description

```php
public void DOMElement::setIdAttribute(string $qualifiedName, bool $isId)
```

Declares the attribute `$qualifiedName` to be of type ID.

## Parameters

- **`$qualifiedName`** — The name of the attribute.
- **`$isId`** — Set it to `true` if you want `$qualifiedName` to be of type ID, `false` otherwise.

## Return Values

No value is returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$qualifiedName` is not an attribute of this element.

## See Also

`DOMDocument::getElementById()` `DOMElement::setIdAttributeNode()` `DOMElement::setIdAttributeNS()`
