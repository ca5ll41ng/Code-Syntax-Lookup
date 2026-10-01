---
id: "en-php-function-domdocument-createattributens"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::createAttributeNS"
title: "Create new attribute node with an associated namespace"
signature: "public DOMAttr|false DOMDocument::createAttributeNS(string|null $namespace, string $qualifiedName)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.createattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new attribute node with an associated namespace

## Description

```php
public DOMAttr|false DOMDocument::createAttributeNS(string|null $namespace, string $qualifiedName)
```

This function creates a new instance of class `DOMAttr`. This node will not show up in the document unless it is inserted with (e.g.) `DOMNode::appendChild()`.

## Parameters

- **`$namespace`** — The URI of the namespace.
- **`$qualifiedName`** — The tag name and prefix of the attribute, as `prefix:tagname`.

## Return Values

The new `DOMAttr` or `false` if an error occurred.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_INVALID_CHARACTER_ERR`** — Raised if `$qualifiedName` contains an invalid character.
- **`DOM_NAMESPACE_ERR`** — Raised if `$qualifiedName` is a malformed qualified name, or if `$qualifiedName` has a prefix and `$namespace` is `null`.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Calling this method without specifying a prefix will now choose a prefix instead of assuming the default namespace. Previously this would create an attribute without a prefix and incorrectly apply the namespace to the owner element because default namespaces don't apply on attributes. |
| 8.3.0 | Calling this method using a prefix that was already declared on the owner element with a different namespace URI will now change the new prefix to avoid creating namespace conflicts. This aligns the behaviour with the DOM specification. Previously this threw a `DOMException` with code `DOM_NAMESPACE_ERR`. |

## See Also

`DOMNode::appendChild()` `DOMDocument::createAttribute()` `DOMDocument::createCDATASection()` `DOMDocument::createComment()` `DOMDocument::createDocumentFragment()` `DOMDocument::createElement()` `DOMDocument::createElementNS()` `DOMDocument::createEntityReference()` `DOMDocument::createProcessingInstruction()` `DOMDocument::createTextNode()`
