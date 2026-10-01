---
id: "en-php-function-solrinputdocument-setfieldboost"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::setFieldBoost"
title: "Sets the index-time boost value for a field"
signature: "public bool SolrInputDocument::setFieldBoost(string $fieldName, float $fieldBoostValue)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.setfieldboost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the index-time boost value for a field

## Description

```php
public bool SolrInputDocument::setFieldBoost(string $fieldName, float $fieldBoostValue)
```

Sets the index-time boost value for a field. This replaces the current boost value for this field.

## Parameters

- **`$fieldName`** — The name of the field.
- **`$fieldBoostValue`** — The index time boost value.

## Return Values

Returns `true` on success or `false` on failure.
