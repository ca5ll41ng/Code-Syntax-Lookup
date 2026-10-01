---
id: "en-php-function-solrdismaxquery-addbigramphrasefield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::addBigramPhraseField"
title: "Adds a Phrase Bigram Field (pf2 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::addBigramPhraseField(string $field, string $boost, [string $slop = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.addbigramphrasefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a Phrase Bigram Field (pf2 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::addBigramPhraseField(string $field, string $boost, [string $slop = ...])
```

Adds a Phrase Bigram Field (pf2 parameter) output format: field~slop^boost OR field^boost Slop is optional

## Parameters

- **`$field`**
- **`$boost`**
- **`$slop`**

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::addBigramPhraseField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBigramPhraseField('cat', 2, 5.1)
    ->addBigramPhraseField('feature', 4.5)
;
echo $dismaxQuery;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&pf2=cat~5.1^2 feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::removeBigramPhraseField()` `SolrDisMaxQuery::setBigramPhraseFields()` `SolrDisMaxQuery::setBigramPhraseSlop()`
