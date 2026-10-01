---
id: "en-php-function-xsltprocessor-transformtoxml"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::transformToXml"
title: "Transform to XML"
signature: "public string|null|false XSLTProcessor::transformToXml(object $document)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.transformtoxml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Transform to XML

## Description

```php
public string|null|false XSLTProcessor::transformToXml(object $document)
```

Transforms the source node to a string applying the stylesheet given by the `xsltprocessor::importStylesheet()` method.

## parameters





## Return Values

The result of the transformation as a string or `false` on error.



## Examples

**Transforming to a string**

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

echo $proc->transformToXML($xml);

?>

    
```

The above example will output:

```text


Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

<h1>Fight for your mind</h1><h2>by Ben Harper - 1995</h2><hr>
<h1>Electric Ladyland</h1><h2>by Jimi Hendrix - 1997</h2><hr>

    
```

**Transforming to a string using `Dom\Document`**

```php


<?php

$xml = Dom\XMLDocument::createFromFile('collection.xml');
$xsl = Dom\XMLDocument::createFromFile('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

echo $proc->transformToXML($xml);

?>

    
```

The above example will output:

```text


Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

<h1>Fight for your mind</h1><h2>by Ben Harper - 1995</h2><hr>
<h1>Electric Ladyland</h1><h2>by Jimi Hendrix - 1997</h2><hr>

    
```

## See Also

`XSLTProcessor::transformToDoc()` `XSLTProcessor::transformToUri()`
