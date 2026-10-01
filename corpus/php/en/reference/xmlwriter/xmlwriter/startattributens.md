---
id: "en-php-function-xmlwriter-startattributens"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startAttributeNs"
aliases: ["xmlwriter_start_attribute_ns"]
title: "Create start namespaced attribute"
signature: "public bool XMLWriter::startAttributeNs(string|null $prefix, string $name, string|null $namespace)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start namespaced attribute

## Description

Object-oriented style

```php
public bool XMLWriter::startAttributeNs(string|null $prefix, string $name, string|null $namespace)
```

Procedural style

```php
bool xmlwriter_start_attribute_ns(XMLWriter $writer, string|null $prefix, string $name, string|null $namespace)
```

Starts a namespaced attribute.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$prefix`** — The namespace prefix.
- **`$name`** — The attribute name.
- **`$namespace`** — The namespace URI. If `$namespace` is `null`, the namespace declaration will be omitted.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$prefix` is nullable now. |

## See Also

`XMLWriter::startAttribute()` `XMLWriter::endAttribute()` `XMLWriter::writeAttribute()` `XMLWriter::writeAttributeNs()`
