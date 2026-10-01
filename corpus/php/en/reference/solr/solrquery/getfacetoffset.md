---
id: "en-php-function-solrquery-getfacetoffset"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetOffset"
title: "Returns an offset into the list of constraints to be used for pagination"
signature: "public int SolrQuery::getFacetOffset([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetoffset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an offset into the list of constraints to be used for pagination

## Description

```php
public int SolrQuery::getFacetOffset([string $field_override = ...])
```

Returns an offset into the list of constraints to be used for pagination. Accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field to override for.

## Return Values

Returns an integer on success and `null` if not set
