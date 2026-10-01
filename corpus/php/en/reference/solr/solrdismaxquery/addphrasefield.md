---
id: "en-php-function-solrdismaxquery-addphrasefield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::addPhraseField"
title: "Adds a Phrase Field (pf parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::addPhraseField(string $field, string $boost, [string $slop = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.addphrasefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a Phrase Field (pf parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::addPhraseField(string $field, string $boost, [string $slop = ...])
```

Adds a Phrase Field (pf parameter)

## Parameters

- **`$field`** — field name
- **`$boost`**
- **`$slop`**

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::addPhraseField()` example**

```php


<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addPhraseField('cat', 3, 1)
    ->addPhraseField('third', 4, 2)
    ->addPhraseField('source', 55)
;
echo $dismaxQuery;
?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&pf=cat~1^3 third~2^4 source^55

   
```

## See Also

 `SolrDisMaxQuery::removePhraseField()` `SolrDisMaxQuery::setPhraseFields()`
