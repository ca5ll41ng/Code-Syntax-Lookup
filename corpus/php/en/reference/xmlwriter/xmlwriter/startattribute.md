---
id: "en-php-function-xmlwriter-startattribute"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::startAttribute"
aliases: ["xmlwriter_start_attribute"]
title: "Create start attribute"
signature: "public bool XMLWriter::startAttribute(string $name)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.startattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create start attribute

## Description

Object-oriented style

```php
public bool XMLWriter::startAttribute(string $name)
```

Procedural style

```php
bool xmlwriter_start_attribute(XMLWriter $writer, string $name)
```

Starts an attribute.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$name`** — The attribute name.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## Examples

**Basic `XMLWriter::startAttribute()` Usage**

```php


<?php
$writer = new XMLWriter;
$writer->openURI('php://output');
$writer->startDocument('1.0', 'UTF-8');
$writer->startElement('element');
$writer->startAttribute('attribute');
$writer->text('value');
$writer->endAttribute();
$writer->endElement();
$writer->endDocument();

   
```

The above example will output something similar to:

```text


<?xml version="1.0" encoding="UTF-8"?>
<element attribute="value"/>

   
```

## See Also

`XMLWriter::startAttributeNs()` `XMLWriter::endAttribute()` `XMLWriter::writeAttribute()` `XMLWriter::writeAttributeNs()`
