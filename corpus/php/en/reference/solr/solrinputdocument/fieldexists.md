---
id: "en-php-function-solrinputdocument-fieldexists"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::fieldExists"
title: "Checks if a field exists"
signature: "public bool SolrInputDocument::fieldExists(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.fieldexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a field exists

## Description

```php
public bool SolrInputDocument::fieldExists(string $fieldName)
```

Checks if a field exists

## Parameters

- **`$fieldName`** — Name of the field.

## Return Values

Returns `true` if the field was found and `false` if it was not found.
