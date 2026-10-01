---
id: "en-php-function-domelement-setidattributens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::setIdAttributeNS"
title: "Declares the attribute specified by local name and namespace URI to be of type ID"
signature: "public void DOMElement::setIdAttributeNS(string $namespace, string $qualifiedName, bool $isId)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.setidattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Declares the attribute specified by local name and namespace URI to be of type ID

## Description

```php
public void DOMElement::setIdAttributeNS(string $namespace, string $qualifiedName, bool $isId)
```

Declares the attribute specified by `$qualifiedName` and `$namespace` to be of type ID.

## Parameters

- **`$namespace`** — The namespace URI of the attribute.
- **`$qualifiedName`** — The local name of the attribute, as `prefix:tagname`.
- **`$isId`** — Set it to `true` if you want `$name` to be of type ID, `false` otherwise.

## Return Values

No value is returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.
- **`DOM_NOT_FOUND_ERR`** — Raised if `$name` is not an attribute of this element.

## See Also

`DOMDocument::getElementById()` `DOMElement::setIdAttribute()` `DOMElement::setIdAttributeNode()`
