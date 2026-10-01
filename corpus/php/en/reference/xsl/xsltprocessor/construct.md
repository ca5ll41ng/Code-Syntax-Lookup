---
id: "en-php-function-xsltprocessor-construct"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::__construct"
title: "Creates a new XSLTProcessor object"
signature: "XSLTProcessor::__construct()"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new XSLTProcessor object

## Description

```php
XSLTProcessor::__construct()
```

Creates a new `XSLTProcessor` object.

## Parameters

This function has no parameters.

## Examples

**Creating an `XSLTProcessor`**

```php


<?php

$xsldoc = new DOMDocument();
$xsldoc->load($xsl_filename);

$xmldoc = new DOMDocument();
$xmldoc->load($xml_filename);

$xsl = new XSLTProcessor();
$xsl->importStyleSheet($xsldoc);
echo $xsl->transformToXML($xmldoc);

?>

    
```
