---
id: "en-php-function-xsltprocessor-importstylesheet"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::importStylesheet"
title: "Import stylesheet"
signature: "public bool XSLTProcessor::importStylesheet(object $stylesheet)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.importstylesheet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Import stylesheet

## Description

```php
public bool XSLTProcessor::importStylesheet(object $stylesheet)
```

This method imports the stylesheet into the `XSLTProcessor` for transformations.

## Parameters

- **`$stylesheet`** — The imported style sheet as a `Dom\Document`, `DOMDocument` or `SimpleXMLElement` object.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Throws a TypeError if `$stylesheet` is not an XML object.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Added support for `Dom\Document`. |
| 8.4.0 | Now throws a TypeError instead of a ValueError if `$stylesheet` is not an XML object. |
