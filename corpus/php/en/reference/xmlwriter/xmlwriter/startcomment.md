---
id: "en-php-function-xmlwriter-startcomment"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startComment"
aliases: ["xmlwriter_start_comment"]
title: "Create start comment"
signature: "public bool XMLWriter::startComment()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startcomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start comment

## Description

Object-oriented style

```php
public bool XMLWriter::startComment()
```

Procedural style

```php
bool xmlwriter_start_comment(XMLWriter $writer)
```

Starts a comment.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endComment()` `XMLWriter::writeComment()`
