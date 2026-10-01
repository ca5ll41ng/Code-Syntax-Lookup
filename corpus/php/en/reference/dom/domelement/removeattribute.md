---
id: "en-php-function-domelement-removeattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::removeAttribute"
title: "Removes attribute"
signature: "public bool DOMElement::removeAttribute(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.removeattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes attribute

## Description

```php
public bool DOMElement::removeAttribute(string $qualifiedName)
```

Removes attribute named `$qualifiedName` from the element.

## Parameters

- **`$qualifiedName`** — The name of the attribute.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.

## See Also

`DOMElement::hasAttribute()` `DOMElement::getAttribute()` `DOMElement::setAttribute()`
