---
id: "en-php-function-domelement-getattributenode"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getAttributeNode"
title: "Returns attribute node"
signature: "public DOMAttr|DOMNameSpaceNode|false DOMElement::getAttributeNode(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getattributenode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns attribute node

## Description

```php
public DOMAttr|DOMNameSpaceNode|false DOMElement::getAttributeNode(string $qualifiedName)
```

Returns the attribute node with name `$qualifiedName` for the current element.

## Parameters

- **`$qualifiedName`** — The name of the attribute.

## Return Values

The attribute node. Note that for XML namespace declarations (`xmlns` and `xmlns:*` attributes) an instance of `DOMNameSpaceNode` is returned instead of a `DOMAttr`.

## See Also

`DOMElement::hasAttribute()` `DOMElement::setAttributeNode()` `DOMElement::removeAttributeNode()`
