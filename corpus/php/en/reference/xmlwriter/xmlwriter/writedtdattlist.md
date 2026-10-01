---
id: "en-php-function-xmlwriter-writedtdattlist"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeDtdAttlist"
aliases: ["xmlwriter_write_dtd_attlist"]
title: "Write full DTD AttList tag"
signature: "public bool XMLWriter::writeDtdAttlist(string $name, string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writedtdattlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full DTD AttList tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeDtdAttlist(string $name, string $content)
```

Procedural style

```php
bool xmlwriter_write_dtd_attlist(XMLWriter $writer, string $name, string $content)
```

Writes a DTD attribute list.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The name of the DTD attribute list.
- **`$content`** — The content of the DTD attribute list.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtdAttlist()` `XMLWriter::endDtdAttlist()`
