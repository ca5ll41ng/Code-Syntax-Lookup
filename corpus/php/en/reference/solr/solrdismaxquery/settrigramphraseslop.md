---
id: "en-php-function-solrdismaxquery-settrigramphraseslop"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setTrigramPhraseSlop"
title: "Sets Trigram Phrase Slop (ps3 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setTrigramPhraseSlop(string $slop)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.settrigramphraseslop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets Trigram Phrase Slop (ps3 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setTrigramPhraseSlop(string $slop)
```

Sets Trigram Phrase Slop (ps3 parameter)

## Parameters

- **`$slop`** — Phrase slop

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setTrigramPhraseSlop()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery->setTrigramPhraseSlop(2);
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&ps3=2

   
```

## See Also

 `SolrDisMaxQuery::addTrigramPhraseField()` `SolrDisMaxQuery::removeTrigramPhraseField()` `SolrDisMaxQuery::setTrigramPhraseFields()`
