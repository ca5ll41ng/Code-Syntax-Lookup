---
id: "en-php-function-xsltprocessor-transformtodoc"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::transformToDoc"
title: "Transform to a document"
signature: "public object|false XSLTProcessor::transformToDoc(object $document, string|null $returnClass = null)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.transformtodoc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transform to a document

## Description

```php
public object|false XSLTProcessor::transformToDoc(object $document, string|null $returnClass = null)
```

Transforms the source node to a document (e.g. `DOMDocument`) applying the stylesheet given by the `XSLTProcessor::importStylesheet()` method.

## Parameters

- **`$document`** — The `Dom\Document`, `DOMDocument`, `SimpleXMLElement` or libxml-compatible object to be transformed.
- **`$returnClass`** — This optional parameter may be used so that `XSLTProcessor::transformToDoc()` will return an object of the specified class. That class should either extend or be the same class as `$document`'s class.



## Return Values

The resulting document or `false` on error.



## Examples

**Transforming to a `DOMDocument`**

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

echo trim($proc->transformToDoc($xml)->firstChild->wholeText);

?>

    
```

The above example will output:

```text


Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

    
```

**Transforming to a `Dom\Document`**

```php


<?php

$xml = Dom\XMLDocument::createFromFile('collection.xml');
$xsl = Dom\XMLDocument::createFromFile('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

echo trim($proc->transformToDoc($xml)->firstChild->wholeText);

?>

    
```

The above example will output:

```text


Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

    
```

## See Also

`XSLTProcessor::transformToUri()` `XSLTProcessor::transformToXml()`
