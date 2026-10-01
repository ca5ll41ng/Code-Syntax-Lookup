---
id: "en-php-function-domxpath-registernamespace"
language: "php"
lang: "en"
category: "function"
name: "DOMXPath::registerNamespace"
title: "Registers the namespace with the `DOMXPath` object"
signature: "public bool DOMXPath::registerNamespace(string $prefix, string $namespace)"
module: "dom"
source_url: "https://www.php.net/manual/en/domxpath.registernamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers the namespace with the `DOMXPath` object

## Description

```php
public bool DOMXPath::registerNamespace(string $prefix, string $namespace)
```

Registers the `$namespace` and `$prefix` with the DOMXPath object.

## Parameters

- **`$prefix`** — The prefix.
- **`$namespace`** — The URI of the namespace.

## Return Values

Returns `true` on success or `false` on failure.
