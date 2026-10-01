---
id: "en-php-function-solrinputdocument-getfieldboost"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::getFieldBoost"
title: "Retrieves the boost value for a particular field"
signature: "public float SolrInputDocument::getFieldBoost(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.getfieldboost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves the boost value for a particular field

## Description

```php
public float SolrInputDocument::getFieldBoost(string $fieldName)
```

Retrieves the boost value for a particular field.

## Parameters

- **`$fieldName`** — The name of the field.

## Return Values

Returns the boost value for the field or `false` if there was an error.
