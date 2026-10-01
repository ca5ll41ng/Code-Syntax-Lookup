---
id: "en-php-function-xmlwriter-endpi"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endPi"
aliases: ["xmlwriter_end_pi"]
title: "End current PI"
signature: "public bool XMLWriter::endPi()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.endpi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current PI

## Description

Object-oriented style

```php
public bool XMLWriter::endPi()
```

Procedural style

```php
bool xmlwriter_end_pi(XMLWriter $writer)
```

Ends the current processing instruction.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startPi()` `XMLWriter::writePi()`
