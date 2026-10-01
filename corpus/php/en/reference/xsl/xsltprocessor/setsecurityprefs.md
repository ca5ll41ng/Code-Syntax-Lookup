---
id: "en-php-function-xsltprocessor-setsecurityprefs"
language: "php"
lang: "en"
category: "function"
name: "XSLTProcessor::setSecurityPrefs"
title: "Set security preferences"
signature: "public int XSLTProcessor::setSecurityPrefs(int $preferences)"
module: "xsl"
source_url: "https://www.php.net/manual/en/xsltprocessor.setsecurityprefs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set security preferences

## Description

```php
public int XSLTProcessor::setSecurityPrefs(int $preferences)
```

Sets the security preferences.

## Parameters

- **`$preferences`** — The new security preferences. The following constants can be ORed: `XSL_SECPREF_READ_FILE`, `XSL_SECPREF_WRITE_FILE`, `XSL_SECPREF_CREATE_DIRECTORY`, `XSL_SECPREF_READ_NETWORK`, `XSL_SECPREF_WRITE_NETWORK`. Alternatively, `XSL_SECPREF_NONE` or `XSL_SECPREF_DEFAULT` can be passed.

## Return Values

Returns the old security preferences.
