---
id: "en-php-function-solrquery-addexpandfilterquery"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addExpandFilterQuery"
title: "Overrides main filter query, determines which documents to include in the main group"
signature: "public SolrQuery SolrQuery::addExpandFilterQuery(string $fq)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addexpandfilterquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Overrides main filter query, determines which documents to include in the main group

## Description

```php
public SolrQuery SolrQuery::addExpandFilterQuery(string $fq)
```

Overrides main filter query, determines which documents to include in the main group.

## Parameters

- **`$fq`**

## Return Values

`SolrQuery`

## See Also

 `SolrQuery::setExpand()` `SolrQuery::addExpandSortField()` `SolrQuery::removeExpandSortField()` `SolrQuery::setExpandRows()` `SolrQuery::setExpandQuery()` `SolrQuery::removeExpandFilterQuery()`
