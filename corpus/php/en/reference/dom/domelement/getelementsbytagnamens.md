---
id: "en-php-function-domelement-getelementsbytagnamens"
language: "php"
lang: "en"
category: "function"
name: "DOMElement::getElementsByTagNameNS"
title: "Get elements by namespaceURI and localName"
signature: "public DOMNodeList DOMElement::getElementsByTagNameNS(string|null $namespace, string $localName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domelement.getelementsbytagnamens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get elements by namespaceURI and localName

## Description

```php
public DOMNodeList DOMElement::getElementsByTagNameNS(string|null $namespace, string $localName)
```

This function fetch all the descendant elements with a given `$localName` and `$namespace`.

## Parameters

- **`$namespace`** — The namespace URI of the elements to match on. The special value `"*"` matches all namespaces. Passing `null` matches the empty namespace.
- **`$localName`** — The local name of the elements to match on. The special value `"*"` matches all local names.

## Return Values

This function returns a new instance of the class `DOMNodeList` of all matched elements in the order in which they are encountered in a preorder traversal of this element tree.

## Changelog

|  |  |
| --- | --- |
| 8.0.3 | `$namespace` is nullable now. |

## See Also

`DOMElement::getElementsByTagName()`
