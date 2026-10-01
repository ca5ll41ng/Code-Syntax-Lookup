---
id: "en-php-function-solrdismaxquery-removeboostquery"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::removeBoostQuery"
title: "Removes a boost query partial by field name (bq)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::removeBoostQuery(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.removeboostquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a boost query partial by field name (bq)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::removeBoostQuery(string $field)
```

Removes a boost query partial from the existing query, only if `SolrDisMaxQuery::addBoostQuery()` was used.

## Parameters

- **`$field`** — Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::removeBoostQuery()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBoostQuery('cat', 'electronics', 5.1)
    ->addBoostQuery('cat', 'hard drive')
;
echo $dismaxQuery.PHP_EOL;
// now remove a query part with field 'cat'
$dismaxQuery
->removeBoostQuery('cat');
echo $dismaxQuery . PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&bq=cat:electronics^5.1 cat:hard drive
q=lucene&defType=edismax&bq=cat:hard drive

   
```

## See Also

 `SolrDisMaxQuery::addBoostQuery()` `SolrDisMaxQuery::setBoostQuery()`
