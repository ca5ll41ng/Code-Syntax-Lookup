---
id: "en-php-function-solrquery-setgroupcachepercent"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setGroupCachePercent"
title: "Enables caching for result grouping"
signature: "public SolrQuery SolrQuery::setGroupCachePercent(int $percent)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setgroupcachepercent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enables caching for result grouping

## Description

```php
public SolrQuery SolrQuery::setGroupCachePercent(int $percent)
```

Setting this parameter to a number greater than 0 enables caching for result grouping. Result Grouping executes two searches; this option caches the second search. The server default value is 0. Testing has shown that group caching only improves search time with Boolean, wildcard, and fuzzy queries. For simple queries like term or "match all" queries, group caching degrades performance. group.cache.percent parameter

## Parameters

- **`$percent`**

## Return Values

## Errors/Exceptions

Emits `SolrIllegalArgumentException` in case of an invalid parameter was passed.

## See Also

 `SolrQuery::setGroup()` `SolrQuery::addGroupField()` `SolrQuery::addGroupFunction()` `SolrQuery::addGroupQuery()` `SolrQuery::addGroupSortField()` `SolrQuery::setGroupFacet()` `SolrQuery::setGroupOffset()` `SolrQuery::setGroupLimit()` `SolrQuery::setGroupMain()` `SolrQuery::setGroupNGroups()` `SolrQuery::setGroupTruncate()` `SolrQuery::setGroupFormat()`
