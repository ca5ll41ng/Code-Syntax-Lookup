---
id: "en-php-function-xsltprocessor-hasexsltsupport"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::hasExsltSupport"
title: "Determine if PHP has EXSLT support"
signature: "public bool XSLTProcessor::hasExsltSupport()"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.hasexsltsupport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine if PHP has EXSLT support

## Description

```php
public bool XSLTProcessor::hasExsltSupport()
```

This method determines if PHP was built with the [EXSLT library]().

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Testing EXSLT support**

```php


<?php

$proc = new XSLTProcessor;
if (!$proc->hasExsltSupport()) {
    die('EXSLT support not available');
}

// do EXSLT stuff here ..

?>
       
    
```
