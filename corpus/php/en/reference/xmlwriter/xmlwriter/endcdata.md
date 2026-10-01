---
id: "en-php-function-xmlwriter-endcdata"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endCdata"
aliases: ["xmlwriter_end_cdata"]
title: "End current CDATA"
signature: "public bool XMLWriter::endCdata()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.endcdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current CDATA

## Description

Object-oriented style

```php
public bool XMLWriter::endCdata()
```

Procedural style

```php
bool xmlwriter_end_cdata(XMLWriter $writer)
```

Ends the current CDATA section.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startCdata()` `XMLWriter::writeCdata()`
