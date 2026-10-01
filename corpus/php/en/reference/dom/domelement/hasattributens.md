---
id: "en-php-function-domelement-hasattributens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::hasAttributeNS"
title: "Checks to see if attribute exists"
signature: "public bool DOMElement::hasAttributeNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.hasattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks to see if attribute exists

## Description

```php
public bool DOMElement::hasAttributeNS(string|null $namespace, string $localName)
```

Indicates whether attribute in namespace `$namespace` named `$localName` exists as a member of the element.

## Parameters

- **`$namespace`** — The namespace URI.
- **`$localName`** — The local name.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMElement::hasAttribute()` `DOMElement::getAttributeNS()` `DOMElement::setAttributeNS()` `DOMElement::removeAttributeNS()`
