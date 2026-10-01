---
id: "en-php-function-solrquery-getfacetmissing"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetMissing"
title: "Returns the current state of the facet.missing parameter"
signature: "public bool SolrQuery::getFacetMissing([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetmissing.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current state of the facet.missing parameter

## Description

```php
public bool SolrQuery::getFacetMissing([string $field_override = ...])
```

Returns the current state of the facet.missing parameter. This accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a boolean on success and `null` if not set
