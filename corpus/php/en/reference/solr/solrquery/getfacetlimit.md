---
id: "en-php-function-solrquery-getfacetlimit"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetLimit"
title: "Returns the maximum number of constraint counts that should be returned for the facet fields"
signature: "public int SolrQuery::getFacetLimit([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the maximum number of constraint counts that should be returned for the facet fields

## Description

```php
public int SolrQuery::getFacetLimit([string $field_override = ...])
```

Returns the maximum number of constraint counts that should be returned for the facet fields. This method accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field to override for

## Return Values

Returns an integer on success and `null` if not set
