---
id: "en-php-function-xmlwriter-startdtdentity"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startDtdEntity"
aliases: ["xmlwriter_start_dtd_entity"]
title: "Create start DTD Entity"
signature: "public bool XMLWriter::startDtdEntity(string $name, bool $isParam)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startdtdentity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start DTD Entity

## Description

Object-oriented style

```php
public bool XMLWriter::startDtdEntity(string $name, bool $isParam)
```

Procedural style

```php
bool xmlwriter_start_dtd_entity(XMLWriter $writer, string $name, bool $isParam)
```

Starts a DTD entity.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The name of the entity.
- **`$isParam`**

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endDtdEntity()` `XMLWriter::writeDtdEntity()`
