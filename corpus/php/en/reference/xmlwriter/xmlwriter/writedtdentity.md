---
id: "en-php-function-xmlwriter-writedtdentity"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeDtdEntity"
aliases: ["xmlwriter_write_dtd_entity"]
title: "Write full DTD Entity tag"
signature: "public bool XMLWriter::writeDtdEntity(string $name, string $content, bool $isParam = false, string|null $publicId = null, string|null $systemId = null, string|null $notationData = null)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writedtdentity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full DTD Entity tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeDtdEntity(string $name, string $content, bool $isParam = false, string|null $publicId = null, string|null $systemId = null, string|null $notationData = null)
```

Procedural style

```php
bool xmlwriter_write_dtd_entity(XMLWriter $writer, string $name, string $content, bool $isParam = false, string|null $publicId = null, string|null $systemId = null, string|null $notationData = null)
```

Writes a full DTD entity.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The name of the entity.
- **`$content`** — The content of the entity.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$publicId`, `$systemId` and `$notationData` are nullable now. |

## See Also

`XMLWriter::startDtdEntity()` `XMLWriter::endDtdEntity()`
