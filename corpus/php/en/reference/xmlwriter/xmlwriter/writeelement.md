---
id: "en-php-function-xmlwriter-writeelement"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeElement"
aliases: ["xmlwriter_write_element"]
title: "Write full element tag"
signature: "public bool XMLWriter::writeElement(string $name, string|null $content = null)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writeelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full element tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeElement(string $name, string|null $content = null)
```

Procedural style

```php
bool xmlwriter_write_element(XMLWriter $writer, string $name, string|null $content = null)
```

Writes a full element tag.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The element name.
- **`$content`** — The element contents.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startElement()` `XMLWriter::endElement()` `XMLWriter::writeElementNs()`
