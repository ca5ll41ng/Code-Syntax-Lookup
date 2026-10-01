---
id: "en-php-function-xmlwriter-startelementns"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startElementNs"
aliases: ["xmlwriter_start_element_ns"]
title: "Create start namespaced element tag"
signature: "public bool XMLWriter::startElementNs(string|null $prefix, string $name, string|null $namespace)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startelementns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start namespaced element tag

## Description

Object-oriented style

```php
public bool XMLWriter::startElementNs(string|null $prefix, string $name, string|null $namespace)
```

Procedural style

```php
bool xmlwriter_start_element_ns(XMLWriter $writer, string|null $prefix, string $name, string|null $namespace)
```

Starts a namespaced element.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$prefix`** — The namespace prefix. If `$prefix` is `null`, the namespace will be omitted.
- **`$name`** — The element name.
- **`$namespace`** — The namespace URI. If `$namespace` is `null`, the namespace declaration will be omitted.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::endElement()` `XMLWriter::writeElementNs()`
