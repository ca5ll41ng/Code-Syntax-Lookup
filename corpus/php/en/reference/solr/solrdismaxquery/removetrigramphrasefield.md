---
id: "en-php-function-solrdismaxquery-removetrigramphrasefield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::removeTrigramPhraseField"
title: "Removes a Trigram Phrase Field (pf3 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::removeTrigramPhraseField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.removetrigramphrasefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a Trigram Phrase Field (pf3 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::removeTrigramPhraseField(string $field)
```

Removes a Trigram Phrase Field (pf3 parameter)

## Parameters

- **`$field`** — Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::removeTrigramPhraseField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addTrigramPhraseField('cat', 2, 5.1)
->addTrigramPhraseField('feature', 4.5)
;
echo $dismaxQuery.PHP_EOL;
// reverse
$dismaxQuery
->removeTrigramPhraseField('cat');
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output:

```text


q=lucene&defType=%s&pf3=cat~5.1^2 feature^4.5
q=lucene&defType=%s&pf3=feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::addTrigramPhraseField()` `SolrDisMaxQuery::setTrigramPhraseFields()` `SolrDisMaxQuery::setTrigramPhraseSlop()`
