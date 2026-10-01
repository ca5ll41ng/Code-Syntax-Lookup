---
id: "en-php-function-xmlwriter-startdtdattlist"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startDtdAttlist"
aliases: ["xmlwriter_start_dtd_attlist"]
title: "Create start DTD AttList"
signature: "public bool XMLWriter::startDtdAttlist(string $name)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startdtdattlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start DTD AttList

## Description

Object-oriented style

```php
public bool XMLWriter::startDtdAttlist(string $name)
```

Procedural style

```php
bool xmlwriter_start_dtd_attlist(XMLWriter $writer, string $name)
```

Starts a DTD attribute list.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The attribute list name.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endDtdAttlist()` `XMLWriter::writeDtdAttlist()`
