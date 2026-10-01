---
id: "en-php-function-xmlwriter-writeraw"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeRaw"
aliases: ["xmlwriter_write_raw"]
title: "Write a raw XML text"
signature: "public bool XMLWriter::writeRaw(string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writeraw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write a raw XML text

## Description

Object-oriented style

```php
public bool XMLWriter::writeRaw(string $content)
```

Procedural style

```php
bool xmlwriter_write_raw(XMLWriter $writer, string $content)
```

Writes a raw xml text.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$content`** — The text string to write.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::text()`
