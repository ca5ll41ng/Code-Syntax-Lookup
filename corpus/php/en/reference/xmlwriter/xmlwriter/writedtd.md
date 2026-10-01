---
id: "en-php-function-xmlwriter-writedtd"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeDtd"
aliases: ["xmlwriter_write_dtd"]
title: "Write full DTD tag"
signature: "public bool XMLWriter::writeDtd(string $name, string|null $publicId = null, string|null $systemId = null, string|null $content = null)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writedtd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full DTD tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeDtd(string $name, string|null $publicId = null, string|null $systemId = null, string|null $content = null)
```

Procedural style

```php
bool xmlwriter_write_dtd(XMLWriter $writer, string $name, string|null $publicId = null, string|null $systemId = null, string|null $content = null)
```

Writes a full DTD.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The DTD name.
- **`$publicId`** — The external subset public identifier.
- **`$systemId`** — The external subset system identifier.
- **`$content`** — The content of the DTD.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtd()` `XMLWriter::endDtd()`
