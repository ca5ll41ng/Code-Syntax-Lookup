---
id: "en-php-function-solrquery-addexpandsortfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addExpandSortField"
title: "Orders the documents within the expanded groups (expand.sort parameter)"
signature: "public SolrQuery SolrQuery::addExpandSortField(string $field, [string $order = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addexpandsortfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Orders the documents within the expanded groups (expand.sort parameter)

## Description

```php
public SolrQuery SolrQuery::addExpandSortField(string $field, [string $order = ...])
```

Orders the documents within the expanded groups (expand.sort parameter).

## Parameters

- **`$field`** — field name
- **`$order`** — Order ASC/DESC, utilizes SolrQuery::ORDER_* constants. — Default: `SolrQuery::ORDER_DESC`

## Return Values

`SolrQuery`

## See Also

 `SolrQuery::setExpand()` `SolrQuery::removeExpandSortField()` `SolrQuery::setExpandRows()` `SolrQuery::setExpandQuery()` `SolrQuery::addExpandFilterQuery()` `SolrQuery::removeExpandFilterQuery()`
