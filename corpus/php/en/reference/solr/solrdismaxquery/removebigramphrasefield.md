---
id: "en-php-function-solrdismaxquery-removebigramphrasefield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::removeBigramPhraseField"
title: "Removes phrase bigram field (pf2 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::removeBigramPhraseField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.removebigramphrasefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes phrase bigram field (pf2 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::removeBigramPhraseField(string $field)
```

Removes a Bigram Phrase Field (pf2 parameter) that was previously added using `SolrDisMaxQuery::addBigramPhraseField()`

## Parameters

- **`$field`** — The Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::removeBigramPhraseField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBigramPhraseField('cat', 2, 5.1)
    ->addBigramPhraseField('feature', 4.5)
;
echo $dismaxQuery.PHP_EOL;

// remove cat from pf2
$dismaxQuery
    ->removeBigramPhraseField('cat');
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&pf2=cat~5.1^2 feature^4.5
q=lucene&defType=edismax&pf2=feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::addBigramPhraseField()` `SolrDisMaxQuery::setBigramPhraseFields()` `SolrDisMaxQuery::setBigramPhraseSlop()`
