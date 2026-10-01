---
id: "en-php-function-xmlwriter-enddtdelement"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::endDtdElement"
aliases: ["xmlwriter_end_dtd_element"]
title: "End current DTD element"
signature: "public bool XMLWriter::endDtdElement()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.enddtdelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current DTD element

## Description

Object-oriented style

```php
public bool XMLWriter::endDtdElement()
```

Procedural style

```php
bool xmlwriter_end_dtd_element(XMLWriter $writer)
```

Ends the current DTD element.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::startDtdElement()` `XMLWriter::writeDtdElement()`
