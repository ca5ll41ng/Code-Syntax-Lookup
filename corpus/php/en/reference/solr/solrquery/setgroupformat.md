---
id: "en-php-function-solrquery-setgroupformat"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setGroupFormat"
title: "Sets the group format, result structure (group.format parameter)"
signature: "public SolrQuery SolrQuery::setGroupFormat(string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setgroupformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the group format, result structure (group.format parameter)

## Description

```php
public SolrQuery SolrQuery::setGroupFormat(string $value)
```

Sets the group.format parameter. If this parameter is set to simple, the grouped documents are presented in a single flat list, and the start and rows parameters affect the numbers of documents instead of groups. Accepts: grouped/simple

## Parameters

- **`$value`**

## Return Values

## See Also

 `SolrQuery::setGroup()` `SolrQuery::addGroupField()` `SolrQuery::addGroupFunction()` `SolrQuery::addGroupQuery()` `SolrQuery::addGroupSortField()` `SolrQuery::setGroupFacet()` `SolrQuery::setGroupOffset()` `SolrQuery::setGroupLimit()` `SolrQuery::setGroupMain()` `SolrQuery::setGroupNGroups()` `SolrQuery::setGroupTruncate()` `SolrQuery::setGroupCachePercent()`
