---
id: "en-php-function-xmlwriter-startcdata"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startCdata"
aliases: ["xmlwriter_start_cdata"]
title: "Create start CDATA tag"
signature: "public bool XMLWriter::startCdata()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startcdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start CDATA tag

## Description

Object-oriented style

```php
public bool XMLWriter::startCdata()
```

Procedural style

```php
bool xmlwriter_start_cdata(XMLWriter $writer)
```

Starts a CDATA.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endCdata()` `XMLWriter::writeCdata()`
