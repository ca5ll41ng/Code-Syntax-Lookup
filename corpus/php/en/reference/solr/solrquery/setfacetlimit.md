---
id: "en-php-function-solrquery-setfacetlimit"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetLimit"
title: "Maps to facet.limit"
signature: "public SolrQuery SolrQuery::setFacetLimit(int $limit, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to facet.limit

## Description

```php
public SolrQuery SolrQuery::setFacetLimit(int $limit, [string $field_override = ...])
```

Maps to facet.limit. Sets the maximum number of constraint counts that should be returned for the facet fields.

## Parameters

- **`$limit`** — The maximum number of constraint counts
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
