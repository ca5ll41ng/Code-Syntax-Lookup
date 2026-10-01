---
id: "en-php-function-solrquery-gettermssort"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getTermsSort"
title: "Returns an integer indicating how terms are sorted"
signature: "public int SolrQuery::getTermsSort()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gettermssort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an integer indicating how terms are sorted

## Description

```php
public int SolrQuery::getTermsSort()
```

SolrQuery::TERMS_SORT_INDEX indicates that the terms are returned by index order. SolrQuery::TERMS_SORT_COUNT implies that the terms are sorted by term frequency (highest count first)

## Parameters

This function has no parameters.

## Return Values

Returns an integer on success and `null` if not set.
