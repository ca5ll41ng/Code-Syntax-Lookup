---
id: "en-php-function-solrdismaxquery-setphraseslop"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setPhraseSlop"
title: "Sets the default slop on phrase queries (ps parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setPhraseSlop(string $slop)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setphraseslop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the default slop on phrase queries (ps parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setPhraseSlop(string $slop)
```

Sets the default amount of slop on phrase queries built with "pf", "pf2" and/or "pf3" fields (affects boosting). "ps" parameter

## Parameters

- **`$slop`**

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setPhraseSlop()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');

$dismaxQuery->setPhraseSlop(4);
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output:

```text


q=lucene&defType=edismax&ps=4

   
```
