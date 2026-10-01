---
id: "en-php-function-domelement-setattributenodens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::setAttributeNodeNS"
title: "Adds new attribute node to element"
signature: "public DOMAttr|null|false DOMElement::setAttributeNodeNS(DOMAttr $attr)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.setattributenodens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds new attribute node to element

## Description

```php
public DOMAttr|null|false DOMElement::setAttributeNodeNS(DOMAttr $attr)
```

Adds new attribute node `$attr` to element, keeping the namespace into account. If an attribute with the same name already exists on the element, that attribute is replaced by `$attr`.

## Parameters

- **`$attr`** — The attribute node.

## Return Values

Returns the old attribute if it has been replaced or `null` if there was no old attribute. If a `DOM_WRONG_DOCUMENT_ERR` error is raised, and `strictErrorChecking` is `false`, `false` is returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if `$attr` belongs to a different document than the element.

## See Also

`DOMElement::hasAttributeNS()` `DOMElement::getAttributeNodeNS()` `DOMElement::removeAttributeNode()`
