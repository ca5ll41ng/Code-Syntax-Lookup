---
id: "en-php-function-solrdismaxquery-addboostquery"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::addBoostQuery"
title: "Adds a boost query field with value and optional boost (bq parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::addBoostQuery(string $field, string $value, [string $boost = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.addboostquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a boost query field with value and optional boost (bq parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::addBoostQuery(string $field, string $value, [string $boost = ...])
```

Adds a Boost Query field with value [and boost] (bq parameter)

## Parameters

- **`$field`**
- **`$value`**
- **`$boost`**

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::addBoostQuery()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBoostQuery('cat', 'clothing', 2)
    ->addBoostQuery('cat', 'electronics', 5.1)
;
echo $dismaxQuery.PHP_EOL;
?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&bq=cat:clothing^2 cat:electronics^5.1

   
```

## See Also

 `SolrDisMaxQuery::removeBoostQuery()` `SolrDisMaxQuery::setBoostQuery()`
