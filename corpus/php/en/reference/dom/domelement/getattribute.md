---
id: "en-php-function-domelement-getattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getAttribute"
title: "Returns value of attribute"
signature: "public string DOMElement::getAttribute(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns value of attribute

## Description

```php
public string DOMElement::getAttribute(string $qualifiedName)
```

Gets the value of the attribute with name `$qualifiedName` for the current node.

## Parameters

- **`$qualifiedName`** — The name of the attribute.

## Return Values

The value of the attribute, or an empty string if no attribute with the given `$qualifiedName` is found.

## See Also

`DOMElement::hasAttribute()` `DOMElement::setAttribute()` `DOMElement::removeAttribute()`
