---
id: "en-php-function-xmlwriter-enddocument"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endDocument"
aliases: ["xmlwriter_end_document"]
title: "End current document"
signature: "public bool XMLWriter::endDocument()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.enddocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current document

## Description

Object-oriented style

```php
public bool XMLWriter::endDocument()
```

Procedural style

```php
bool xmlwriter_end_document(XMLWriter $writer)
```

Ends the current document.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDocument()`
