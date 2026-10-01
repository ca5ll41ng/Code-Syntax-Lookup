---
id: "en-php-function-solrdismaxquery-settiebreaker"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setTieBreaker"
title: "Sets Tie Breaker parameter (tie parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setTieBreaker(string $tieBreaker)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.settiebreaker.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets Tie Breaker parameter (tie parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setTieBreaker(string $tieBreaker)
```

Sets Tie Breaker parameter (tie parameter)

## Parameters

- **`$tieBreaker`** — The *tie* parameter specifies a float value (which should be something much less than 1) to use as tiebreaker in DisMax queries.

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setTieBreaker()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->setTieBreaker(0.1);

echo $dismaxQuery;

?>

   
```

The above example will output:

```text


defType=edismax&tie=0.1

   
```
