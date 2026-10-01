---
id: "en-php-function-function-rnp-supported-features"
language: "php"
lang: "en"
category: "function"
name: "rnp_supported_features"
title: "Get supported features in JSON format"
signature: "string|false rnp_supported_features(string $type)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-supported-features.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get supported features in JSON format

## Description

```php
string|false rnp_supported_features(string $type)
```

Get the JSON formatted string containing array of supported rnp feature values (algorithms, curves, etc) by type.

## Parameters

- **`$type`** — See RNP_FEATURE_* constants for supported values.

## Return Values

String containing JSON formatted array of supported algorithms, curves, etc or `false` on failure.
