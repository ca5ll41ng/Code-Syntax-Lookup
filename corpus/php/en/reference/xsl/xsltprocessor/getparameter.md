---
id: "en-php-function-xsltprocessor-getparameter"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::getParameter"
title: "Get value of a parameter"
signature: "public string|false XSLTProcessor::getParameter(string $namespace, string $name)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.getparameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get value of a parameter

## Description

```php
public string|false XSLTProcessor::getParameter(string $namespace, string $name)
```

Gets a parameter if previously set by `XSLTProcessor::setParameter()`.

## Parameters

- **`$namespace`** — The namespace URI of the XSLT parameter.
- **`$name`** — The local name of the XSLT parameter.

## Return Values

The value of the parameter (as a string), or `false` if it's not set.

## See Also

`XSLTProcessor::setParameter()` `XSLTProcessor::removeParameter()`
