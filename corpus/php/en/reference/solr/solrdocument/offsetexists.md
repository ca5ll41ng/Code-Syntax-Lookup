---
id: "en-php-function-solrdocument-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::offsetExists"
title: "Checks if a particular field exists"
signature: "public bool SolrDocument::offsetExists(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a particular field exists

## Description

```php
public bool SolrDocument::offsetExists(string $fieldName)
```

Checks if a particular field exists. This is used when the object is treated as an array.

## Parameters

- **`$fieldName`** — The name of the field.

## Return Values

Returns `true` on success or `false` on failure.
