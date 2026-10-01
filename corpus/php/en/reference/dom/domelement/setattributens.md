---
id: "en-php-function-domelement-setattributens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::setAttributeNS"
title: "Adds new attribute"
signature: "public void DOMElement::setAttributeNS(string|null $namespace, string $qualifiedName, string $value)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.setattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds new attribute

## Description

```php
public void DOMElement::setAttributeNS(string|null $namespace, string $qualifiedName, string $value)
```

Sets an attribute with namespace `$namespace` and name `$qualifiedName` to the given value. If the attribute does not exist, it will be created.

## Parameters

- **`$namespace`** — The namespace URI.
- **`$qualifiedName`** — The qualified name of the attribute, as `prefix:tagname`.
- **`$value`** — The value of the attribute.

## Return Values

No value is returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.
- **`DOM_NAMESPACE_ERR`** — Raised if `$qualifiedName` is a malformed qualified name, or if `$qualifiedName` has a prefix and `$namespace` is `null`.

## See Also

`DOMElement::hasAttributeNS()` `DOMElement::getAttributeNS()` `DOMElement::removeAttributeNS()`
