---
id: "en-php-function-solrdismaxquery-settrigramphrasefields"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setTrigramPhraseFields"
title: "Directly Sets Trigram Phrase Fields (pf3 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setTrigramPhraseFields(string $fields)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.settrigramphrasefields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Directly Sets Trigram Phrase Fields (pf3 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setTrigramPhraseFields(string $fields)
```

Directly Sets Trigram Phrase Fields (pf3 parameter)

## Parameters

- **`$fields`** — Trigram Phrase Fields

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setTrigramPhraseFields()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery->setTrigramPhraseFields('cat~5.1^2 feature^4.5');
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output:

```text


q=lucene&defType=edismax&pf3=cat~5.1^2 feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::addTrigramPhraseField()` `SolrDisMaxQuery::removeTrigramPhraseField()` `SolrDisMaxQuery::setTrigramPhraseSlop()`
