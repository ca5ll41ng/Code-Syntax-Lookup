---
id: "en-php-function-xmlwriter-enddtd"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endDtd"
aliases: ["xmlwriter_end_dtd"]
title: "End current DTD"
signature: "public bool XMLWriter::endDtd()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.enddtd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current DTD

## Description

Object-oriented style

```php
public bool XMLWriter::endDtd()
```

Procedural style

```php
bool xmlwriter_end_dtd(XMLWriter $writer)
```

Ends the DTD of the document.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtd()` `XMLWriter::writeDtd()`
