---
id: "en-php-function-domelement-removeattributens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::removeAttributeNS"
title: "Removes attribute"
signature: "public void DOMElement::removeAttributeNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.removeattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes attribute

## Description

```php
public void DOMElement::removeAttributeNS(string|null $namespace, string $localName)
```

Removes attribute `$localName` in namespace `$namespace` from the element.

## Parameters

- **`$namespace`** — The namespace URI.
- **`$localName`** — The local name.

## Return Values

No value is returned.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.

## See Also

`DOMElement::hasAttributeNS()` `DOMElement::getAttributeNS()` `DOMElement::setAttributeNS()`
