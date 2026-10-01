---
id: "en-php-function-solrquery-setexpand"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setExpand"
title: "Enables/Disables the Expand Component"
signature: "public SolrQuery SolrQuery::setExpand(bool $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setexpand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enables/Disables the Expand Component

## Description

```php
public SolrQuery SolrQuery::setExpand(bool $value)
```

Enables/Disables the Expand Component.

## Parameters

- **`$value`** — Bool flag

## Return Values

`SolrQuery`

## Examples

**`SolrQuery::setExpand()` example**

```php


<?php

$query = new SolrQuery('lucene');

$query
    ->setExpand(true)
    ->setExpandRows(50)
    ->setExpandQuery('text:product')
    ->addExpandFilterQuery('manu:apple')
    ->addExpandFilterQuery('inStock:true')
    ->addExpandSortField('score', SolrQuery::ORDER_DESC)
    ->addExpandSortField('title', SolrQuery::ORDER_ASC);

echo $query.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&expand=true&expand.rows=50&expand.q=text:product&expand.fq=manu:apple&expand.fq=inStock:true&expand.sort=score desc,title asc

   
```

## See Also

 `SolrQuery::addExpandSortField()` `SolrQuery::removeExpandSortField()` `SolrQuery::setExpandRows()` `SolrQuery::setExpandQuery()` `SolrQuery::addExpandFilterQuery()` `SolrQuery::removeExpandFilterQuery()`
