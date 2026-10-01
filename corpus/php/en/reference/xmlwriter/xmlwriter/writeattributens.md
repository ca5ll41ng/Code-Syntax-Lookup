---
id: "en-php-function-xmlwriter-writeattributens"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeAttributeNs"
aliases: ["xmlwriter_write_attribute_ns"]
title: "Write full namespaced attribute"
signature: "public bool XMLWriter::writeAttributeNs(string|null $prefix, string $name, string|null $namespace, string $value)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writeattributens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full namespaced attribute

## Description

Object-oriented style

```php
public bool XMLWriter::writeAttributeNs(string|null $prefix, string $name, string|null $namespace, string $value)
```

Procedural style

```php
bool xmlwriter_write_attribute_ns(XMLWriter $writer, string|null $prefix, string $name, string|null $namespace, string $value)
```

Writes a full namespaced attribute.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$prefix`** — The namespace prefix. If `$prefix` is `null`, the namespace will be omitted.
- **`$name`** — The attribute name.
- **`$namespace`** — The namespace URI. If `$namespace` is `null`, the namespace declaration will be omitted.
- **`$value`** — The attribute value.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## See Also

`XMLWriter::writeAttribute()` `XMLWriter::startAttribute()` `XMLWriter::startAttributeNs()` `XMLWriter::endAttribute()`
