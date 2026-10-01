---
id: "en-php-function-xsltprocessor-getsecurityprefs"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::getSecurityPrefs"
title: "Get security preferences"
signature: "public int XSLTProcessor::getSecurityPrefs()"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.getsecurityprefs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get security preferences

## Description

```php
public int XSLTProcessor::getSecurityPrefs()
```

Gets the security preferences.

## Parameters

This function has no parameters.

## Return Values

A bitmask consisting of `XSL_SECPREF_READ_FILE`, `XSL_SECPREF_WRITE_FILE`, `XSL_SECPREF_CREATE_DIRECTORY`, `XSL_SECPREF_READ_NETWORK`, `XSL_SECPREF_WRITE_NETWORK`.
