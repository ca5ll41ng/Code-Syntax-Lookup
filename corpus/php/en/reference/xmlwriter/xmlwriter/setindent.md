---
id: "en-php-function-xmlwriter-setindent"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::setIndent"
aliases: ["xmlwriter_set_indent"]
title: "Toggle indentation on/off"
signature: "public bool XMLWriter::setIndent(bool $enable)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.setindent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Toggle indentation on/off

## Description

Object-oriented style

```php
public bool XMLWriter::setIndent(bool $enable)
```

Procedural style

```php
bool xmlwriter_set_indent(XMLWriter $writer, bool $enable)
```

Toggles indentation on or off.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$enable`** — Whether indentation is enabled.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## Examples

**`XMLWriter::setIndent()` and mixed Content**

Enabling indentation is not suitable for mixed content, because the indent string is also inserted before inline elements.

```php


<?php
$writer = new XMLWriter();
$writer->openMemory();
$writer->setIndent(true);
$writer->startDocument();
$writer->startElement('p');
$writer->text('before');
$writer->writeElement('a', 'element');
$writer->text('after');
$writer->endElement();
$writer->endDocument();
echo $writer->outputMemory();
?>

   
```

The above example will output:

```text


<?xml version="1.0"?>
<p>before <a>element</a>
after</p>

   
```

## Notes

> The indent is reset when an xmlwriter is opened.

## See Also

`XMLWriter::setIndentString()`
