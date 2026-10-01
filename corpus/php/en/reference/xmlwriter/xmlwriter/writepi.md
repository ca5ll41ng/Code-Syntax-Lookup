---
id: "en-php-function-xmlwriter-writepi"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writePi"
aliases: ["xmlwriter_write_pi"]
title: "Writes a PI"
signature: "public bool XMLWriter::writePi(string $target, string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writepi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Writes a PI

## Description

Object-oriented style

```php
public bool XMLWriter::writePi(string $target, string $content)
```

Procedural style

```php
bool xmlwriter_write_pi(XMLWriter $writer, string $target, string $content)
```

Writes a processing instruction.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$target`** — The target of the processing instruction.
- **`$content`** — The content of the processing instruction.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startPi()` `XMLWriter::endPi()`
