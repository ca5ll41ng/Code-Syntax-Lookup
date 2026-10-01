---
id: "en-php-function-xmlwriter-endattribute"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endAttribute"
aliases: ["xmlwriter_end_attribute"]
title: "End attribute"
signature: "public bool XMLWriter::endAttribute()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.endattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End attribute

## Description

Object-oriented style

```php
public bool XMLWriter::endAttribute()
```

Procedural style

```php
bool xmlwriter_end_attribute(XMLWriter $writer)
```

Ends the current attribute.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startAttribute()` `XMLWriter::startAttributeNs()` `XMLWriter::writeAttribute()` `XMLWriter::writeAttributeNs()`
