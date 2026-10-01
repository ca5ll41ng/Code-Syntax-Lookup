---
id: "en-php-function-xmlwriter-enddtdattlist"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endDtdAttlist"
aliases: ["xmlwriter_end_dtd_attlist"]
title: "End current DTD AttList"
signature: "public bool XMLWriter::endDtdAttlist()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.enddtdattlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current DTD AttList

## Description

Object-oriented style

```php
public bool XMLWriter::endDtdAttlist()
```

Procedural style

```php
bool xmlwriter_end_dtd_attlist(XMLWriter $writer)
```

Ends the current DTD attribute list.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtdAttlist()` `XMLWriter::writeDtdAttlist()`
