---
id: "en-php-function-solrquery-getfacetmincount"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetMinCount"
title: "Returns the minimum counts for facet fields should be included in the response"
signature: "public int SolrQuery::getFacetMinCount([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetmincount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the minimum counts for facet fields should be included in the response

## Description

```php
public int SolrQuery::getFacetMinCount([string $field_override = ...])
```

Returns the minimum counts for facet fields should be included in the response. It accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns an integer on success and `null` if not set
