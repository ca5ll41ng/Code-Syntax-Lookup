---
id: "en-php-function-solrquery-setexpandquery"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setExpandQuery"
title: "Sets the expand.q parameter"
signature: "public SolrQuery SolrQuery::setExpandQuery(string $q)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setexpandquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the expand.q parameter

## Description

```php
public SolrQuery SolrQuery::setExpandQuery(string $q)
```

Sets the expand.q parameter.

Overrides the main q parameter, determines which documents to include in the main group.

## Parameters

- **`$q`**

## Return Values

`SolrQuery`

## See Also

 `SolrQuery::setExpand()` `SolrQuery::addExpandSortField()` `SolrQuery::removeExpandSortField()` `SolrQuery::setExpandRows()` `SolrQuery::addExpandFilterQuery()` `SolrQuery::removeExpandFilterQuery()`
