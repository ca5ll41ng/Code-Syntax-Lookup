---
id: "en-php-function-xmlwriter-startdtd"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startDtd"
aliases: ["xmlwriter_start_dtd"]
title: "Create start DTD tag"
signature: "public bool XMLWriter::startDtd(string $qualifiedName, string|null $publicId = null, string|null $systemId = null)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startdtd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start DTD tag

## Description

Object-oriented style

```php
public bool XMLWriter::startDtd(string $qualifiedName, string|null $publicId = null, string|null $systemId = null)
```

Procedural style

```php
bool xmlwriter_start_dtd(XMLWriter $writer, string $qualifiedName, string|null $publicId = null, string|null $systemId = null)
```

Starts a DTD.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$qualifiedName`** — The qualified name of the document type to create.
- **`$publicId`** — The external subset public identifier.
- **`$systemId`** — The external subset system identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endDtd()` `XMLWriter::writeDtd()`
