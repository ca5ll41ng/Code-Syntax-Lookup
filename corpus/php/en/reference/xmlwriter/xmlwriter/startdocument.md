---
id: "en-php-function-xmlwriter-startdocument"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startDocument"
aliases: ["xmlwriter_start_document"]
title: "Create document tag"
signature: "public bool XMLWriter::startDocument(string|null $version = \"1.0\", string|null $encoding = null, string|null $standalone = null)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startdocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create document tag

## Description

Object-oriented style

```php
public bool XMLWriter::startDocument(string|null $version = "1.0", string|null $encoding = null, string|null $standalone = null)
```

Procedural style

```php
bool xmlwriter_start_document(XMLWriter $writer, string|null $version = "1.0", string|null $encoding = null, string|null $standalone = null)
```

Starts a document.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$version`** — The version number of the document as part of the XML declaration.
- **`$encoding`** — The encoding of the document as part of the XML declaration.
- **`$standalone`** — `yes` or `no`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Passing an `$encoding` containing null bytes will throw a ValueError.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Passing an `$encoding` containing null bytes will now throw a ValueError. |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endDocument()`
