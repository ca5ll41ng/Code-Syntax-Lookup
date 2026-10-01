---
id: "en-php-function-solrdismaxquery-addtrigramphrasefield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::addTrigramPhraseField"
title: "Adds a Trigram Phrase Field (pf3 parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::addTrigramPhraseField(string $field, string $boost, [string $slop = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.addtrigramphrasefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a Trigram Phrase Field (pf3 parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::addTrigramPhraseField(string $field, string $boost, [string $slop = ...])
```

Adds a Trigram Phrase Field (pf3 parameter)

## Parameters

- **`$field`** — Field Name
- **`$boost`** — Field Boost
- **`$slop`** — Field Slop

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::addTrigramPhraseField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addTrigramPhraseField('cat', 2, 5.1)
->addTrigramPhraseField('feature', 4.5)
;
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output:

```text


q=lucene&defType=%s&pf3=cat~5.1^2 feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::removeTrigramPhraseField()` `SolrDisMaxQuery::setTrigramPhraseFields()` `SolrDisMaxQuery::setTrigramPhraseSlop()`
