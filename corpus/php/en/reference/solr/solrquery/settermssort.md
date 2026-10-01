---
id: "en-php-function-solrquery-settermssort"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setTermsSort"
title: "Specifies how to sort the returned terms"
signature: "public SolrQuery SolrQuery::setTermsSort(int $sortType)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.settermssort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies how to sort the returned terms

## Description

```php
public SolrQuery SolrQuery::setTermsSort(int $sortType)
```

If SolrQuery::TERMS_SORT_COUNT, sorts the terms by the term frequency (highest count first). If SolrQuery::TERMS_SORT_INDEX, returns the terms in index order

## Parameters

- **`$sortType`** — SolrQuery::TERMS_SORT_INDEX or SolrQuery::TERMS_SORT_COUNT

## Return Values

Returns the current SolrQuery object, if the return value is used.
