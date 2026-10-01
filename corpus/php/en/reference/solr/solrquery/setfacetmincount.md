---
id: "en-php-function-solrquery-setfacetmincount"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetMinCount"
title: "Maps to facet.mincount"
signature: "public SolrQuery SolrQuery::setFacetMinCount(int $mincount, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetmincount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to facet.mincount

## Description

```php
public SolrQuery SolrQuery::setFacetMinCount(int $mincount, [string $field_override = ...])
```

Sets the minimum counts for facet fields that should be included in the response

## Parameters

- **`$mincount`** — The minimum count
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
