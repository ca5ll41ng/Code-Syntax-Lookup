---
id: "en-php-function-solrobject-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "SolrObject::offsetExists"
title: "Checks if the property exists"
signature: "public bool SolrObject::offsetExists(string $property_name)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrobject.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the property exists

## Description

```php
public bool SolrObject::offsetExists(string $property_name)
```

Checks if the property exists. This is used when the object is treated as an array.

## Parameters

- **`$property_name`** — The name of the property.

## Return Values

Returns `true` on success or `false` on failure.
