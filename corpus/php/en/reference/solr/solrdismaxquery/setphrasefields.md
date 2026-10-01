---
id: "en-php-function-solrdismaxquery-setphrasefields"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setPhraseFields"
title: "Sets Phrase Fields and their boosts (and slops) using pf2 parameter"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setPhraseFields(string $fields)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setphrasefields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets Phrase Fields and their boosts (and slops) using pf2 parameter

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setPhraseFields(string $fields)
```

Sets Phrase Fields (pf) and their boosts (and slops)

## Parameters

- **`$fields`** — Fields, boosts [, slops]

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setPhraseFields()` example**

```php


<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery->setPhraseFields("cat~5.1^2 feature^4.5");
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&pf=cat~5.1^2 feature^4.5

   
```

## See Also

 `SolrDisMaxQuery::addPhraseFields()` `SolrDisMaxQuery::removePhraseField()`
