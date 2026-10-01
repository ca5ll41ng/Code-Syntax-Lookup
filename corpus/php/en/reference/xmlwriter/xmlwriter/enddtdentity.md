---
id: "en-php-function-xmlwriter-enddtdentity"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endDtdEntity"
aliases: ["xmlwriter_end_dtd_entity"]
title: "End current DTD Entity"
signature: "public bool XMLWriter::endDtdEntity()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.enddtdentity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current DTD Entity

## Description

Object-oriented style

```php
public bool XMLWriter::endDtdEntity()
```

Procedural style

```php
bool xmlwriter_end_dtd_entity(XMLWriter $writer)
```

Ends the current DTD entity.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtdEntity()` `XMLWriter::writeDtdEntity()`
