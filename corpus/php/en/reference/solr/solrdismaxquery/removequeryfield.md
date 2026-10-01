---
id: "en-php-function-solrdismaxquery-removequeryfield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::removeQueryField"
title: "Removes a Query Field (qf parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::removeQueryField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.removequeryfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a Query Field (qf parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::removeQueryField(string $field)
```

Removes a Query Field (qf parameter) from the field list added by `SolrDisMaxQuery::addQueryField()`

qf: When building DisjunctionMaxQueries from the user's query it specifies the fields to search in, and boosts for those fields.

## Parameters

- **`$field`** — Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::removeQueryField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
    ->addQueryField('first', 3)
    ->addQueryField('second', 0.2)
    ->addQueryField('cat');
echo $dismaxQuery . PHP_EOL;
// remove field 'second'
echo $dismaxQuery->removeQueryField('second');
?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&qf=first^3 second^0.2 cat
q=lucene&defType=edismax&qf=first^3 cat

   
```

## See Also

 `SolrDisMaxQuery::addQueryField()`
