---
id: "en-php-function-solrdismaxquery-setboostfunction"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setBoostFunction"
title: "Sets a Boost Function (bf parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setBoostFunction(string $function)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setboostfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a Boost Function (bf parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setBoostFunction(string $function)
```

Sets Boost Function (bf parameter).

Functions (with optional boosts) that will be included in the user's query to influence the score. Any function supported natively by Solr can be used, along with a boost value. e.g.:

recip(rord(myfield),1,2,3)^1.5

## Parameters

- **`$function`**

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setBoostFunction()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');

$boostRecentDocsFunction = "recip(ms(NOW,mydatefield),3.16e-11,1,1)";
$dismaxQuery->setBoostFunction($boostRecentDocsFunction);

echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&bf=recip(ms(NOW,mydatefield),3.16e-11,1,1)

   
```
