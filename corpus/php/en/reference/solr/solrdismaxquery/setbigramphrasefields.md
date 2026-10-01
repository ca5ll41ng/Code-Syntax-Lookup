---
id: "en-php-function-solrdismaxquery-setbigramphrasefields"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setBigramPhraseFields"
title: "Sets Bigram Phrase Fields and their boosts (and slops) using pf2 parameter"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setBigramPhraseFields(string $fields)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setbigramphrasefields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets Bigram Phrase Fields and their boosts (and slops) using pf2 parameter

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setBigramPhraseFields(string $fields)
```

Sets Bigram Phrase Fields (pf2) and their boosts (and slops)

## Parameters

- **`$fields`** — Fields boosts (slops)

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setBigramPhraseFields()` example**

```php


<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery->setBigramPhraseFields("cat~5.1^2 feature^4.5");
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&pf2=cat~5.1^2 feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::setBigramPhraseSlop()` `SolrDisMaxQuery::addBigramPhraseFields()` `SolrDisMaxQuery::removeBigramPhraseField()` `SolrDisMaxQuery::setTrigramPhraseFields()`
