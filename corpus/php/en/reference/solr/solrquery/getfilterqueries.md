---
id: "en-php-function-solrquery-getfilterqueries"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFilterQueries"
title: "Returns an array of filter queries"
signature: "public array SolrQuery::getFilterQueries()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfilterqueries.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of filter queries

## Description

```php
public array SolrQuery::getFilterQueries()
```

Returns an array of filter queries. These are queries that can be used to restrict the super set of documents that can be returned, without influencing score

## Parameters

This function has no parameters.

## Return Values

Returns an array on success and `null` if not set.
