---
id: "en-php-function-xmlwriter-fullendelement"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::fullEndElement"
aliases: ["xmlwriter_full_end_element"]
title: "End current element"
signature: "public bool XMLWriter::fullEndElement()"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.fullendelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End current element

## Description

Object-oriented style

```php
public bool XMLWriter::fullEndElement()
```

Procedural style

```php
bool xmlwriter_full_end_element(XMLWriter $writer)
```

End the current xml element. Writes an end tag even if the element is empty.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endElement()`
