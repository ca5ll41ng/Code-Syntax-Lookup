---
id: "en-php-function-xsltprocessor-setparameter"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::setParameter"
title: "Set value for a parameter"
signature: "public bool XSLTProcessor::setParameter(string $namespace, string $name, string $value)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.setparameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set value for a parameter

## Description

```php
public bool XSLTProcessor::setParameter(string $namespace, string $name, string $value)
```

```php
public bool XSLTProcessor::setParameter(string $namespace, array $options)
```

Sets the value of one or more parameters to be used in subsequent transformations with `XSLTProcessor`. If the parameter doesn't exist in the stylesheet it will be ignored.

## Parameters

- **`$namespace`** — The namespace URI of the XSLT parameter.
- **`$name`** — The local name of the XSLT parameter.
- **`$value`** — The new value of the XSLT parameter.
- **`$options`** — An array of `name => value` pairs.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Throws a ValueError if any of the arguments contain null bytes.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Now throws a ValueError if any of the arguments contain null bytes instead of silently truncating. |
| 8.4.0 | It is now possible to set a parameter value containing both single and double quotes. Prior to PHP 8.4.0, this resulted in a warning. |

## Examples

**Changing the owner before the transformation**

```php


<?php

$collections = array(
    'Marc Rutkowski' => 'marc',
    'Olivier Parmentier' => 'olivier'
);

$xsl = new DOMDocument;
$xsl->load('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

foreach ($collections as $name => $file) {
    // Load the XML source
    $xml = new DOMDocument;
    $xml->load('collection_' . $file . '.xml');

    $proc->setParameter('', 'owner', $name);
    $proc->transformToURI($xml, 'file:///tmp/' . $file . '.html');
}

?>

    
```

## See Also

`XSLTProcessor::getParameter()` `XSLTProcessor::removeParameter()`
