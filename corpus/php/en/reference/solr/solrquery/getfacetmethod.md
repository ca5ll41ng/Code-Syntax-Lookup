---
id: "en-php-function-solrquery-getfacetmethod"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetMethod"
title: "Returns the value of the facet.method parameter"
signature: "public string SolrQuery::getFacetMethod([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of the facet.method parameter

## Description

```php
public string SolrQuery::getFacetMethod([string $field_override = ...])
```

Returns the value of the facet.method parameter. This accepts an optional field override.

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set
