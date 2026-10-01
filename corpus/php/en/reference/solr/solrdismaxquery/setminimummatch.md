---
id: "en-php-function-solrdismaxquery-setminimummatch"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setMinimumMatch"
title: "Set Minimum \"Should\" Match (mm)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setMinimumMatch(string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setminimummatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set Minimum "Should" Match (mm)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setMinimumMatch(string $value)
```

Set Minimum "Should" Match parameter (mm). If the default query operator is AND then mm=100%, if the default query operator (q.op) is OR, then mm=0%.

## Parameters

- **`$value`** — Minimum match value/expression

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setMinimumMatch()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
// 75% of the query clauses must match
$dismaxQuery->setMinimumMatch("75%");
echo $dismaxQuery . PHP_EOL;

?>

   
```

The above example will output:

```text


q=lucene&defType=edismax&mm=75%

   
```
