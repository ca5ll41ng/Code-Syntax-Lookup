---
id: "en-php-function-domelement-removeattributenode"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::removeAttributeNode"
title: "Removes attribute"
signature: "public DOMAttr|false DOMElement::removeAttributeNode(DOMAttr $attr)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.removeattributenode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes attribute

## Description

```php
public DOMAttr|false DOMElement::removeAttributeNode(DOMAttr $attr)
```

Removes attribute `$attr` from the element.

## Parameters

- **`$attr`** — The attribute node.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$attr` is not an attribute of the element.

## See Also

`DOMElement::hasAttribute()` `DOMElement::getAttributeNode()` `DOMElement::setAttributeNode()`
