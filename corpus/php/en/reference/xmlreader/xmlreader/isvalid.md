---
id: "en-php-function-xmlreader-isvalid"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::isValid"
title: "Indicates if the parsed document is valid"
signature: "public bool XMLReader::isValid()"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.isvalid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates if the parsed document is valid

## Description

```php
public bool XMLReader::isValid()
```

Returns a boolean indicating if the document being parsed is currently valid according to the DTD, or an XML or RelaxNG schema. If there is no schema, and the DTD validation option is not provided, this method will return `false`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` when the document is valid or `false` otherwise.

## Examples

**Validating XML**

```php


<?php
$xml = XMLReader::open('examples/book-simple.xml');

// The validate parser option must be enabled for 
// this method to work properly
$xml->setParserProperty(XMLReader::VALIDATE, true);

var_dump($xml->isValid());
?>

    
```

## Notes

> This checks the current node, not the entire document.

## See Also

`XMLReader::setParserProperty()` `XMLReader::setRelaxNGSchema()` `XMLReader::setRelaxNGSchemaSource()` `XMLReader::setSchema()`
