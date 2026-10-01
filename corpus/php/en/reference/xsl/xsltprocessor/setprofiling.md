---
id: "en-php-function-xsltprocessor-setprofiling"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::setProfiling"
title: "Sets profiling output file"
signature: "public true XSLTProcessor::setProfiling(string|null $filename)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.setprofiling.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets profiling output file

## Description

```php
public true XSLTProcessor::setProfiling(string|null $filename)
```

Sets the file to output profiling information when processing a stylesheet.

## Parameters

- **`$filename`** — Path to the file to dump profiling information.

## Return Values

Always returns `true`.

## Examples

**Example profiling output**

```php


<?php
// Load the XML source
$xml = new DOMDocument;
$xml->load('collection.xml');

$xsl = new DOMDocument;
$xsl->load('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->setProfiling('profiling.txt');
$proc->importStyleSheet($xsl); // attach the xsl rules

echo trim($proc->transformToDoc($xml)->firstChild->wholeText);
?>

    
```

The above code will produce the following information in the profiling file:

```text


number               match                name      mode  Calls Tot 100us Avg

    0                   cd                                    2      3      1
    1           collection                                    1      1      1

                         Total                                3      4


    
```
