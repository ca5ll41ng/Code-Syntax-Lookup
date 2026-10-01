---
id: "en-php-function-solrquery-setfacetmethod"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetMethod"
title: "Specifies the type of algorithm to use when faceting a field"
signature: "public SolrQuery SolrQuery::setFacetMethod(string $method, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the type of algorithm to use when faceting a field

## Description

```php
public SolrQuery SolrQuery::setFacetMethod(string $method, [string $field_override = ...])
```

Specifies the type of algorithm to use when faceting a field. This method accepts optional field override.

## Parameters

- **`$method`** — The method to use.
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
