---
id: "en-php-function-domelement-getattributens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getAttributeNS"
title: "Returns value of attribute"
signature: "public string DOMElement::getAttributeNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns value of attribute

## Description

```php
public string DOMElement::getAttributeNS(string|null $namespace, string $localName)
```

Gets the value of the attribute in namespace `$namespace` with local name `$localName` for the current node.

## Parameters

- **`$namespace`** — The namespace URI.
- **`$localName`** — The local name.

## Return Values

The value of the attribute, or an empty string if no attribute with the given `$localName` and `$namespace` is found.

## See Also

`DOMElement::hasAttributeNS()` `DOMElement::setAttributeNS()` `DOMElement::removeAttributeNS()`
