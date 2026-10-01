---
id: "en-php-function-domimplementation-createdocument"
language: "php"
lang: "en"
category: "function"
name: "DOMImplementation::createDocument"
title: "Creates a DOMDocument object of the specified type with its document element"
signature: "public DOMDocument DOMImplementation::createDocument(string|null $namespace = null, string $qualifiedName = \"\", DOMDocumentType|null $doctype = null)"
module: "dom"
source_url: "https://www.php.net/manual/en/domimplementation.createdocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a DOMDocument object of the specified type with its document element

## Description

```php
public DOMDocument DOMImplementation::createDocument(string|null $namespace = null, string $qualifiedName = "", DOMDocumentType|null $doctype = null)
```

Creates a `DOMDocument` object of the specified type with its document element.

## Parameters

- **`$namespace`** — The namespace URI of the document element to create.
- **`$qualifiedName`** — The qualified name of the document element to create.
- **`$doctype`** — The type of document to create or `null`.

## Return Values

A new `DOMDocument` object. If `$namespace`, `$qualifiedName`, and `$doctype` are null, the returned `DOMDocument` is empty with no document element.

## Errors/Exceptions

May throw a DOMException with the following error codes:

- **`DOM_WRONG_DOCUMENT_ERR`** — Raised if `$doctype` has already been used with a different document or was created from a different implementation.
- **`DOM_NAMESPACE_ERR`** — Raised if there is an error with the namespace, as determined by `$namespace` and `$qualifiedName`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | The function now has the tentative return type `DOMDocument`. |
| 8.0.3 | `$namespace` is now nullable. |
| 8.0.0 | `$doctype` is now nullable. |
| 8.0.0 | Calling this function statically will now throw an `Error`. Previously, an `E_DEPRECATED` was raised. |

## See Also

`DOMDocument::__construct()` `DOMImplementation::createDocumentType()`
