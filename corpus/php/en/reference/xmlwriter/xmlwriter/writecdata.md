---
id: "en-php-function-xmlwriter-writecdata"
language: "php"
lang: "en"
category: "function"
name: "XMLWriter::writeCdata"
aliases: ["xmlwriter_write_cdata"]
title: "Write full CDATA tag"
signature: "public bool XMLWriter::writeCdata(string $content)"
module: "xmlwriter"
source_url: "https://www.php.net/manual/en/xmlwriter.writecdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write full CDATA tag

## Description

Object-oriented style

```php
public bool XMLWriter::writeCdata(string $content)
```

Procedural style

```php
bool xmlwriter_write_cdata(XMLWriter $writer, string $content)
```

Writes a full CDATA.

## Parameters

- **`$writer`** — Only for procedural calls. The `XMLWriter` instance that is being modified. This object is returned from a call to `xmlwriter_open_uri()` or `xmlwriter_open_memory()`.
- **`$content`** — The contents of the CDATA.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$writer` expects an `XMLWriter` instance now; previously, a `resource` was expected. |

## Examples

**Basic `xmlwriter_write_cdata()` Usage**

```php


<?php
// set up the document
$xml = new XmlWriter();
$xml->openMemory();
$xml->setIndent(true);
$xml->startDocument('1.0', 'UTF-8');
$xml->startElement('mydoc');
$xml->startElement('myele');

// CData output
$xml->startElement('mycdataelement');
$xml->writeCData("text for inclusion as CData");
$xml->endElement();

// end the document and output
$xml->endElement();
$xml->endElement();
echo $xml->outputMemory(true);
?>

   
```

The above example will output:

```text


<?xml version="1.0" encoding="UTF-8"?>
<mydoc>
 <myele>
  <mycdataelement><![CDATA[text for inclusion as CData]]></mycdataelement>
 </myele>
</mydoc>

   
```

## See Also

`XMLWriter::startCdata()` `XMLWriter::endCdata()`
