---
id: "en-php-function-domelement-hasattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::hasAttribute"
title: "Checks to see if attribute exists"
signature: "public bool DOMElement::hasAttribute(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.hasattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks to see if attribute exists

## Description

```php
public bool DOMElement::hasAttribute(string $qualifiedName)
```

Indicates whether attribute named `$qualifiedName` exists as a member of the element.

## Parameters

- **`$qualifiedName`** — The attribute name.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMElement::hasAttributeNS()` `DOMElement::getAttribute()` `DOMElement::setAttribute()` `DOMElement::removeAttribute()`
