---
id: "en-php-function-domdocument-getelementbyid"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::getElementById"
title: "Searches for an element with a certain id"
signature: "public DOMElement|null DOMDocument::getElementById(string $elementId)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.getelementbyid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Searches for an element with a certain id

## Description

```php
public DOMElement|null DOMDocument::getElementById(string $elementId)
```

This function is similar to `domdocument.getelementsbytagname` but searches for an element with a given id.

For this function to work, you will need either to set some ID attributes with `domelement.setidattribute` or a DTD which defines an attribute to be of type ID. In the latter case, you will need to validate your document with `domdocument.validate` or DOMDocument::$validateOnParse before using this function.

## Parameters

- **`$elementId`** — The unique id value for an element.

## Return Values

Returns the `DOMElement` or `null` if the element is not found.

## Examples

**DOMDocument::getElementById() Example**

The following examples use `book.xml` which contains the following:

```xml


<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE books [
  <!ELEMENT books   (book+)>
  <!ELEMENT book    (title, author+, xhtml:blurb?)>
  <!ELEMENT title   (#PCDATA)>
  <!ELEMENT blurb   (#PCDATA)>
  <!ELEMENT author  (#PCDATA)>
  <!ATTLIST books   xmlns        CDATA  #IMPLIED>
  <!ATTLIST books   xmlns:xhtml  CDATA  #IMPLIED>
  <!ATTLIST book    id           ID     #IMPLIED>
  <!ATTLIST author  email        CDATA  #IMPLIED>
]>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
<books xmlns="http://books.php/" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <book id="php-basics">
    <title>PHP Basics</title>
    <author email="jim.smith@basics.php">Jim Smith</author>
    <author email="jane.smith@basics.php">Jane Smith</author>
    <xhtml:blurb><![CDATA[
<p><em>PHP Basics</em> provides an introduction to PHP.</p>
]]></xhtml:blurb>
  </book>
  <book id="php-advanced">
    <title>PHP Advanced Programming</title>
    <author email="jon.doe@advanced.php">Jon Doe</author>
  </book>
</books>
```

```php


<?php

$doc = new DomDocument;

// We need to validate our document before referring to the id
$doc->validateOnParse = true;
$doc->load('examples/book.xml');

echo "The element whose id is 'php-basics' is: " . $doc->getElementById('php-basics')->tagName . "\n";

?>

   
```

The above example will output:

```text


The element whose id is 'php-basics' is: book 

   
```

## See Also

`DOMDocument::getElementsByTagName()`
