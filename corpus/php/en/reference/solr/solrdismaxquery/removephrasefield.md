---
id: "en-php-function-solrdismaxquery-removephrasefield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::removePhraseField"
title: "Removes a Phrase Field (pf parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::removePhraseField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.removephrasefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a Phrase Field (pf parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::removePhraseField(string $field)
```

Removes a Phrase Field (pf parameter) that was previously added using SolrDisMaxQuery::addPhraseField

## Parameters

- **`$field`** — Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::removePhraseField()` example**

```php


<?php
$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
    ->addPhraseField('first', 3, 1)
    ->addPhraseField('second', 4, 1)
    ->addPhraseField('cat', 55);
echo $dismaxQuery . PHP_EOL;
echo $dismaxQuery->removePhraseField('second');
?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&pf=first~1^3 second~1^4 cat^55
q=lucene&defType=edismax&pf=first~1^3 cat^55

   
```

## See Also

 `SolrDisMaxQuery::addPhraseField()` `SolrDisMaxQuery::setPhraseFields()`
