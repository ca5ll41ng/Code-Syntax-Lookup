---
id: "en-php-function-domdocument-xinclude"
language: "php"
lang: "en"
category: "function"
name: "DOMDocument::xinclude"
title: "Substitutes XIncludes in a DOMDocument Object"
signature: "public int|false DOMDocument::xinclude(int $options = 0)"
module: "dom"
source_url: "https://www.php.net/manual/en/domdocument.xinclude.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Substitutes XIncludes in a DOMDocument Object

## Description

```php
public int|false DOMDocument::xinclude(int $options = 0)
```

This method substitutes [XIncludes]() in a DOMDocument object.

> Due to libxml2 automatically resolving entities, this method will produce unexpected results if the included XML file have an attached DTD.

> Avoid calling this method on untrusted XML, as XIncludes can include files from external websites (when the `href` attribute is a URL) or arbitrary local files (when the `href` attribute uses `file://`).

## Parameters

- **`$options`** — Bitwise `OR` of the libxml option constants.

## Return Values

Returns the number of XIncludes in the document, -1 if some processing failed, or `false` if there were no substitutions.

## Examples

**DOMDocument::xinclude() example**

```php


<?php

$xml = <<<EOD
<?xml version="1.0" ?>
<chapter xmlns:xi="http://www.w3.org/2001/XInclude">
 <title>Books of the other guy..</title>
 <para>
  <xi:include href="examples/book.xml">
   <xi:fallback>
    <error>xinclude: book.xml not found</error>
   </xi:fallback>
  </xi:include>
 </para>
</chapter>
EOD;

$dom = new DOMDocument;

// let's have a nice output
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;

// load the XML string defined above
$dom->loadXML($xml);

// substitute xincludes
$dom->xinclude();

echo $dom->saveXML();

?>

    
```

The above example will output something similar to:

```xml


<?xml version="1.0"?>
<chapter xmlns:xi="http://www.w3.org/2001/XInclude">
  <title>Books of the other guy..</title>
  <para>
    <row xml:base="/home/didou/book.xml">
       <entry>The Grapes of Wrath</entry>
       <entry>John Steinbeck</entry>
       <entry>en</entry>
       <entry>0140186409</entry>
      </row>
    <row xml:base="/home/didou/book.xml">
       <entry>The Pearl</entry>
       <entry>John Steinbeck</entry>
       <entry>en</entry>
       <entry>014017737X</entry>
      </row>
    <row xml:base="/home/didou/book.xml">
       <entry>Samarcande</entry>
       <entry>Amine Maalouf</entry>
       <entry>fr</entry>
       <entry>2253051209</entry>
      </row>
  </para>
</chapter>

    
```
