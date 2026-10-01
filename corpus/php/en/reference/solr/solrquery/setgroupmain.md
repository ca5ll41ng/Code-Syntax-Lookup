---
id: "en-php-function-solrquery-setgroupmain"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setGroupMain"
title: "If true, the result of the first field grouping command is used as the main result list in the response, using group.format=simple"
signature: "public SolrQuery SolrQuery::setGroupMain(string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setgroupmain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# If true, the result of the first field grouping command is used as the main result list in the response, using group.format=simple

## Description

```php
public SolrQuery SolrQuery::setGroupMain(string $value)
```

If `true`, the result of the first field grouping command is used as the main result list in the response, using `group.format=simple`.

## Parameters

- **`$value`** — If `true`, the result of the first field grouping command is used as the main result list in the response.

## Return Values

Returns an instance of `SolrQuery`.

## See Also

 `SolrQuery::setGroup()` `SolrQuery::addGroupField()` `SolrQuery::addGroupFunction()` `SolrQuery::addGroupQuery()` `SolrQuery::addGroupSortField()` `SolrQuery::setGroupFacet()` `SolrQuery::setGroupOffset()` `SolrQuery::setGroupMain()` `SolrQuery::setGroupNGroups()` `SolrQuery::setGroupTruncate()` `SolrQuery::setGroupFormat()` `SolrQuery::setGroupCachePercent()`
