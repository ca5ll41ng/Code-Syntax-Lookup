---
id: "en-php-function-solrquery-getfacetsort"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetSort"
title: "Returns the facet sort type"
signature: "public int SolrQuery::getFacetSort([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetsort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the facet sort type

## Description

```php
public int SolrQuery::getFacetSort([string $field_override = ...])
```

Returns an integer (SolrQuery::FACET_SORT_INDEX or SolrQuery::FACET_SORT_COUNT)

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns an integer (SolrQuery::FACET_SORT_INDEX or SolrQuery::FACET_SORT_COUNT) on success or `null` if not set.
