---
id: "en-php-function-xsltprocessor-removeparameter"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::removeParameter"
title: "Remove parameter"
signature: "public bool XSLTProcessor::removeParameter(string $namespace, string $name)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.removeparameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove parameter

## Description

```php
public bool XSLTProcessor::removeParameter(string $namespace, string $name)
```

Removes a parameter, if set. This will make the processor use the default value for the parameter as specified in the stylesheet.

## Parameters

- **`$namespace`** — The namespace URI of the XSLT parameter.
- **`$name`** — The local name of the XSLT parameter.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`XSLTProcessor::setParameter()` `XSLTProcessor::getParameter()`
