---
id: "en-php-function-domelement-getelementsbytagname"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getElementsByTagName"
title: "Gets elements by tagname"
signature: "public DOMNodeList DOMElement::getElementsByTagName(string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getelementsbytagname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets elements by tagname

## Description

```php
public DOMNodeList DOMElement::getElementsByTagName(string $qualifiedName)
```

This function returns a new instance of the class `DOMNodeList` of all descendant elements with a given tag `$qualifiedName`, in the order in which they are encountered in a preorder traversal of this element tree.

## Parameters

- **`$qualifiedName`** — The tag name. Use `*` to return all elements within the element tree.

## Return Values

This function returns a new instance of the class `DOMNodeList` of all matched elements.

## See Also

`DOMElement::getElementsByTagNameNS()`
