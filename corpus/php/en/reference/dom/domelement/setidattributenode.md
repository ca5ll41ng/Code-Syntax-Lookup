---
id: "en-php-function-domelement-setidattributenode"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::setIdAttributeNode"
title: "Declares the attribute specified by node to be of type ID"
signature: "public void DOMElement::setIdAttributeNode(DOMAttr $attr, bool $isId)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.setidattributenode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Declares the attribute specified by node to be of type ID

## Description

```php
public void DOMElement::setIdAttributeNode(DOMAttr $attr, bool $isId)
```

Declares the attribute specified by `$attr` to be of type ID.

## Parameters

- **`$attr`** — The attribute node.
- **`$isId`** — Set it to `true` if you want `$name` to be of type ID, `false` otherwise.

## Return Values

No value is returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$name` is not an attribute of this element.

## See Also

`DOMDocument::getElementById()` `DOMElement::setIdAttribute()` `DOMElement::setIdAttributeNS()`
