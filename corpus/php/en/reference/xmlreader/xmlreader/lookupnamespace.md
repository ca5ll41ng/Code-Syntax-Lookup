---
id: "en-php-function-xmlreader-lookupnamespace"
language: "php"
lang: "en"
category: "function"
name: "XMLReader::lookupNamespace"
title: "Lookup namespace for a prefix"
signature: "public string|null XMLReader::lookupNamespace(string $prefix)"
module: "xmlreader"
source_url: "https://www.php.net/manual/en/xmlreader.lookupnamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lookup namespace for a prefix

## Description

```php
public string|null XMLReader::lookupNamespace(string $prefix)
```

Lookup in scope namespace for a given prefix.

## Parameters

- **`$prefix`** — String containing the prefix.

## Return Values

The value of the namespace, or `null` if no namespace exists.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function can no longer return `false`. |
