---
id: "en-php-function-xmlwriter-writedtdelement"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeDtdElement"
aliases: ["xmlwriter_write_dtd_element"]
title: "Write full DTD element tag"
signature: "public bool XMLWriter::writeDtdElement(string $name, string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writedtdelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full DTD element tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeDtdElement(string $name, string $content)
```

Procedural style

```php
bool xmlwriter_write_dtd_element(XMLWriter $writer, string $name, string $content)
```

Writes a full DTD element.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The name of the DTD element.
- **`$content`** — The content of the element.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtdElement()` `XMLWriter::endDtdElement()`
