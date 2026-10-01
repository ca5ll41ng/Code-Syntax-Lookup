---
id: "en-php-function-solrdismaxquery-setqueryphraseslop"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setQueryPhraseSlop"
title: "Specifies the amount of slop permitted on phrase queries explicitly included in the user's query string (qf parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setQueryPhraseSlop(string $slop)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setqueryphraseslop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the amount of slop permitted on phrase queries explicitly included in the user's query string (qf parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setQueryPhraseSlop(string $slop)
```

The Query Phrase Slop is the amount of slop permitted on phrase queries explicitly included in the user's query string with the *qf* parameter.

slop refers to the number of positions one token needs to be moved in relation to another token in order to match a phrase specified in a query.

## Parameters

- **`$slop`** — Amount of slop

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setQueryPhraseSlop()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->setQueryPhraseSlop(3);
echo $dismaxQuery;
?>

   
```

The above example will output something similar to:

```text


defType=edismax&qs=3

   
```
