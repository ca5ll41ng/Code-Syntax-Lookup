---
id: "en-php-function-solrquery-setfacetsort"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetSort"
title: "Determines the ordering of the facet field constraints"
signature: "public SolrQuery SolrQuery::setFacetSort(int $facetSort, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetsort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines the ordering of the facet field constraints

## Description

```php
public SolrQuery SolrQuery::setFacetSort(int $facetSort, [string $field_override = ...])
```

Determines the ordering of the facet field constraints

## Parameters

- **`$facetSort`** — Use SolrQuery::FACET_SORT_INDEX for sorting by index order or SolrQuery::FACET_SORT_COUNT for sorting by count.
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
