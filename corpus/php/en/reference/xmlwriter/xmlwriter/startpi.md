---
id: "en-php-function-xmlwriter-startpi"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startPi"
aliases: ["xmlwriter_start_pi"]
title: "Create start PI tag"
signature: "public bool XMLWriter::startPi(string $target)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startpi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start PI tag

## Description

Object-oriented style

```php
public bool XMLWriter::startPi(string $target)
```

Procedural style

```php
bool xmlwriter_start_pi(XMLWriter $writer, string $target)
```

Starts a processing instruction tag.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$target`** — The target of the processing instruction.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endPi()` `XMLWriter::writePi()`
