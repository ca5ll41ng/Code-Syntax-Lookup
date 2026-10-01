---
id: "en-php-function-domelement-getattributenodens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getAttributeNodeNS"
title: "Returns attribute node"
signature: "public DOMAttr|DOMNameSpaceNode|null DOMElement::getAttributeNodeNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getattributenodens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns attribute node

## Description

```php
public DOMAttr|DOMNameSpaceNode|null DOMElement::getAttributeNodeNS(string|null $namespace, string $localName)
```

Returns the attribute node in namespace `$namespace` with local name `$localName` for the current node.

## Parameters

- **`$namespace`** — The namespace URI.
- **`$localName`** — The local name.

## Return Values

The attribute node. Note that for XML namespace declarations (`xmlns` and `xmlns:*` attributes) an instance of `DOMNameSpaceNode` is returned instead of a `DOMAttr` object.

## See Also

`DOMElement::hasAttributeNS()` `DOMElement::setAttributeNodeNS()` `DOMElement::removeAttributeNode()`
