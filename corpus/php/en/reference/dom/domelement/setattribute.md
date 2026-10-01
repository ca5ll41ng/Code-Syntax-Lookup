---
id: "en-php-function-domelement-setattribute"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::setAttribute"
title: "Adds new or modifies existing attribute"
signature: "public DOMAttr|bool DOMElement::setAttribute(string $qualifiedName, string $value)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.setattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds new or modifies existing attribute

## Description

```php
public DOMAttr|bool DOMElement::setAttribute(string $qualifiedName, string $value)
```

Sets an attribute with name `$qualifiedName` to the given value. If the attribute does not exist, it will be created.

## Parameters

- **`$qualifiedName`** — The name of the attribute.
- **`$value`** — The value of the attribute.

## Return Values

The created or modified `DOMAttr` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_NO_MODIFICATION_ALLOWED_ERR`** — Raised if the node is readonly.

## Examples

**Setting an attribute**

```php


<?php
$doc = new DOMDocument("1.0");
$node = $doc->createElement("para");
$newnode = $doc->appendChild($node);
$newnode->setAttribute("align", "left");
?>

    
```

## See Also

`DOMElement::hasAttribute()` `DOMElement::getAttribute()` `DOMElement::removeAttribute()`
