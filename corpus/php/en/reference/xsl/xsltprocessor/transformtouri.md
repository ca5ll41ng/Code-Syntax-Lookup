---
id: "en-php-function-xsltprocessor-transformtouri"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::transformToUri"
title: "Transform to URI"
signature: "public int XSLTProcessor::transformToUri(object $document, string $uri)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.transformtouri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transform to URI

## Description

```php
public int XSLTProcessor::transformToUri(object $document, string $uri)
```

Transforms the source node to an URI applying the stylesheet given by the `XSLTProcessor::importStylesheet()` method.

## Parameters

- **`$document`** — The `Dom\Document`, `DOMDocument`, `SimpleXMLElement` or libxml-compatible object to be transformed.
- **`$uri`** — The target URI for the transformation.



## Return Values

Returns the number of bytes written or `false` if an error occurred.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws an Error if the callback cannot be invoked, instead of emitting a warning. |
| 8.4.0 | Added support for `Dom\Document`. |

## Examples

**Transforming to a HTML file**

```php


<?php

// Load the XML source
$xml = new DOMDocument;
$xml->load('collection.xml');

$xsl = new DOMDocument;
$xsl->load('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

$proc->transformToURI($xml, 'file:///tmp/out.html');

?>

    
```

**Transforming to a HTML file using `Dom\Document`**

```php


<?php

$xml = Dom\XMLDocument::createFromFile('collection.xml');
$xsl = Dom\XMLDocument::createFromFile('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

$proc->transformToURI($xml, 'file:///tmp/out.html');

?>

    
```

## See Also

`XSLTProcessor::transformToDoc()` `XSLTProcessor::transformToXml()`
