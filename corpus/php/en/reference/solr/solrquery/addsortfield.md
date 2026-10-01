---
id: "en-php-function-solrquery-addsortfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addSortField"
title: "Used to control how the results should be sorted"
signature: "public SolrQuery SolrQuery::addSortField(string $field, int $order = SolrQuery::ORDER_DESC)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addsortfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to control how the results should be sorted

## Description

```php
public SolrQuery SolrQuery::addSortField(string $field, int $order = SolrQuery::ORDER_DESC)
```

Used to control how the results should be sorted.

## Parameters

- **`$field`** — The name of the field
- **`$order`** — The sort direction. This should be either SolrQuery::ORDER_ASC or SolrQuery::ORDER_DESC.

## Return Values

Returns the current SolrQuery object.
