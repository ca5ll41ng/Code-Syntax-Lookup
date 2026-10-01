---
id: "en-php-function-domnode-issupported"
language: "php"
lang: "en"
category: "function"
name: "DOMNode::isSupported"
title: "Checks if feature is supported for specified version"
signature: "public bool DOMNode::isSupported(string $feature, string $version)"
module: "dom"
source_url: "https://www.php.net/manual/en/domnode.issupported.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if feature is supported for specified version

## Description

```php
public bool DOMNode::isSupported(string $feature, string $version)
```

Checks if the asked `$feature` is supported for the specified `$version`.

## Parameters

- **`$feature`** — The feature to test. See the example of `DOMImplementation::hasFeature()` for a list of features.
- **`$version`** — The version number of the `$feature` to test.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`DOMImplementation::hasFeature()`
