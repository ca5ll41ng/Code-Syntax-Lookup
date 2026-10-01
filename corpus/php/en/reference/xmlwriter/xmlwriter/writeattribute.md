---
id: "en-php-function-xmlwriter-writeattribute"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeAttribute"
aliases: ["xmlwriter_write_attribute"]
title: "Write full attribute"
signature: "public bool XMLWriter::writeAttribute(string $name, string $value)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writeattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full attribute

## Description

Object-oriented style

```php
public bool XMLWriter::writeAttribute(string $name, string $value)
```

Procedural style

```php
bool xmlwriter_write_attribute(XMLWriter $writer, string $name, string $value)
```

Writes a full attribute.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The name of the attribute.
- **`$value`** — The value of the attribute.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## Examples

**Intermixing Sub-elements and Attributes**

If writing sub-elements and attributes is intermixed, any attempt to write attributes after the first sub-element will fail and return false.

```php


<?php
$xml = new XMLWriter();
$xml->openMemory();

$xml->startElement('element');
$xml->writeAttribute('attr1', '0');
$xml->writeElement('subelem', '0');
var_dump($xml->writeAttribute('attr2', '0'));
$xml->endElement();

echo $xml->flush();
?>

   
```

The above example will output:

```text


bool(false)
<element attr1="0"><subelem>0</subelem></element>

   
```

## See Also

`XMLWriter::writeAttributeNs()` `XMLWriter::startAttribute()` `XMLWriter::startAttributeNs()` `XMLWriter::endAttribute()`
