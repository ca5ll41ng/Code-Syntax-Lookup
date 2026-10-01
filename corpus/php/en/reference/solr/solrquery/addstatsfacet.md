---
id: "en-php-function-solrquery-addstatsfacet"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addStatsFacet"
title: "Requests a return of sub results for values within the given facet"
signature: "public SolrQuery SolrQuery::addStatsFacet(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addstatsfacet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Requests a return of sub results for values within the given facet

## Description

```php
public SolrQuery SolrQuery::addStatsFacet(string $field)
```

Requests a return of sub results for values within the given facet. Maps to the stats.facet field

## Parameters

- **`$field`** — The name of the field

## Return Values

Returns the current SolrQuery object, if the return value is used.
