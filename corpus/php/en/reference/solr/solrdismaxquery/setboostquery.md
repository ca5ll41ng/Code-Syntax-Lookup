---
id: "en-php-function-solrdismaxquery-setboostquery"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setBoostQuery"
title: "Directly Sets Boost Query Parameter (bq)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setBoostQuery(string $q)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setboostquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Directly Sets Boost Query Parameter (bq)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setBoostQuery(string $q)
```

Sets Boost Query Parameter (bq)

## Parameters

- **`$q`** — query

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setBoostQuery()` example**

```php


<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");

$dismaxQuery->setBoostQuery('cat:electronics manu:local^2');
echo $dismaxQuery.PHP_EOL;
?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&bq=cat:electronics manu:local^2

   
```

## See Also

 `SolrDisMaxQuery::addBoostQuery()` `SolrDisMaxQuery::removeBoostQuery()`
