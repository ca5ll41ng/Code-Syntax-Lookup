---
id: "en-php-function-solrquery-addgroupfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addGroupField"
title: "Add a field to be used to group results"
signature: "public SolrQuery SolrQuery::addGroupField(string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addgroupfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a field to be used to group results

## Description

```php
public SolrQuery SolrQuery::addGroupField(string $value)
```

The name of the field by which to group results. The field must be single-valued, and either be indexed or a field type that has a value source and works in a function query, such as ExternalFileField. It must also be a string-based field, such as StrField or TextField Uses group.field parameter

## Parameters

- **`$value`** — The name of the field.

## Return Values

Returns an instance of `SolrQuery`.

## See Also

 `SolrQuery::setGroup()` `SolrQuery::addGroupFunction()` `SolrQuery::addGroupQuery()` `SolrQuery::addGroupSortField()` `SolrQuery::setGroupFacet()` `SolrQuery::setGroupOffset()` `SolrQuery::setGroupLimit()` `SolrQuery::setGroupMain()` `SolrQuery::setGroupNGroups()` `SolrQuery::setGroupTruncate()` `SolrQuery::setGroupFormat()` `SolrQuery::setGroupCachePercent()`
