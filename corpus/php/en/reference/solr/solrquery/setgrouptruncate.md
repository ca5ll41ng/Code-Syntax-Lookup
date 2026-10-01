---
id: "en-php-function-solrquery-setgrouptruncate"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setGroupTruncate"
title: "If true, facet counts are based on the most relevant document of each group matching the query"
signature: "public SolrQuery SolrQuery::setGroupTruncate(bool $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setgrouptruncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# If true, facet counts are based on the most relevant document of each group matching the query

## Description

```php
public SolrQuery SolrQuery::setGroupTruncate(bool $value)
```

If true, facet counts are based on the most relevant document of each group matching the query. The server default value is false. group.truncate parameter

## Parameters

- **`$value`**

## Return Values

## See Also

 `SolrQuery::setGroup()` `SolrQuery::addGroupField()` `SolrQuery::addGroupFunction()` `SolrQuery::addGroupQuery()` `SolrQuery::addGroupSortField()` `SolrQuery::setGroupFacet()` `SolrQuery::setGroupOffset()` `SolrQuery::setGroupLimit()` `SolrQuery::setGroupMain()` `SolrQuery::setGroupNGroups()` `SolrQuery::setGroupFormat()` `SolrQuery::setGroupCachePercent()`
