---
id: "en-php-function-xmlwriter-startdtdelement"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startDtdElement"
aliases: ["xmlwriter_start_dtd_element"]
title: "Create start DTD element"
signature: "public bool XMLWriter::startDtdElement(string $qualifiedName)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startdtdelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start DTD element

## Description

Object-oriented style

```php
public bool XMLWriter::startDtdElement(string $qualifiedName)
```

Procedural style

```php
bool xmlwriter_start_dtd_element(XMLWriter $writer, string $qualifiedName)
```

Starts a DTD element.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$qualifiedName`** — The qualified name of the document type to create.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endDtdElement()` `XMLWriter::writeDtdElement()`
