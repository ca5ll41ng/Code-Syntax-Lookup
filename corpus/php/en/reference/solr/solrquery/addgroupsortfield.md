---
id: "en-php-function-solrquery-addgroupsortfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addGroupSortField"
title: "Add a group sort field (group.sort parameter)"
signature: "public SolrQuery SolrQuery::addGroupSortField(string $field, [int $order = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addgroupsortfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a group sort field (group.sort parameter)

## Description

```php
public SolrQuery SolrQuery::addGroupSortField(string $field, [int $order = ...])
```

Allow sorting group documents, using group sort field (group.sort parameter).

## Parameters

- **`$field`** — Field name
- **`$order`** — Order ASC/DESC, utilizes SolrQuery::ORDER_* constants

## Return Values

## Examples

**`SolrQuery::addGroupSortField()` example**

```php


<?php

$solrQuery = new SolrQuery('*:*');
$solrQuery
    ->setGroup(true)
    ->addGroupSortField('price', SolrQuery::ORDER_ASC);
    
echo $solrQuery; 
?>

   
```

The above example will output something similar to:

```text


q=*:*&group=true&group.sort=price asc

   
```

## See Also

 `SolrQuery::setGroup()` `SolrQuery::addGroupField()` `SolrQuery::addGroupFunction()` `SolrQuery::addGroupQuery()` `SolrQuery::setGroupFacet()` `SolrQuery::setGroupOffset()` `SolrQuery::setGroupLimit()` `SolrQuery::setGroupMain()` `SolrQuery::setGroupNGroups()` `SolrQuery::setGroupTruncate()` `SolrQuery::setGroupFormat()` `SolrQuery::setGroupCachePercent()`
