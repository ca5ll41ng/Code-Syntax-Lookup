---
id: "en-php-function-xmlwriter-startelement"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startElement"
aliases: ["xmlwriter_start_element"]
title: "Create start element tag"
signature: "public bool XMLWriter::startElement(string $name)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startelement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start element tag

## Description

Object-oriented style

```php
public bool XMLWriter::startElement(string $name)
```

Procedural style

```php
bool xmlwriter_start_element(XMLWriter $writer, string $name)
```

Starts an element.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The element name.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endElement()` `XMLWriter::writeElement()`
