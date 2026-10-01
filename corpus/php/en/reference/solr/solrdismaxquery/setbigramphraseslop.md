---
id: "en-php-function-solrdismaxquery-setbigramphraseslop"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setBigramPhraseSlop"
title: "Sets Bigram Phrase Slop (ps2 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setBigramPhraseSlop(string $slop)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setbigramphraseslop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets Bigram Phrase Slop (ps2 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setBigramPhraseSlop(string $slop)
```

Sets Bigram Phrase Slop (ps2 parameter). A default slop for Bigram phrase fields.

## Parameters

- **`$slop`**

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setBigramPhraseSlop()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');

$dismaxQuery->setBigramPhraseSlop(5);
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&ps2=5

   
```
