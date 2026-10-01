---
id: "en-php-function-xmlwriter-writecomment"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeComment"
aliases: ["xmlwriter_write_comment"]
title: "Write full comment tag"
signature: "public bool XMLWriter::writeComment(string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writecomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full comment tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeComment(string $content)
```

Procedural style

```php
bool xmlwriter_write_comment(XMLWriter $writer, string $content)
```

Writes a full comment.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$content`** — The contents of the comment.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startComment()` `XMLWriter::endComment()`
