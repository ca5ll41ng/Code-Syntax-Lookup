---
id: "en-php-function-solrdismaxquery-addqueryfield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::addQueryField"
title: "Add a query field with optional boost (qf parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::addQueryField(string $field, [string $boost = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.addqueryfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a query field with optional boost (qf parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::addQueryField(string $field, [string $boost = ...])
```

Add a query field with optional boost (qf parameter)

## Parameters

- **`$field`** — field name
- **`$boost`** — Boost value. Boosts documents with matching terms.

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::addQueryField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addQueryField("location", 4)
    ->addQueryField("price")
    ->addQueryField("sku")
    ->addQueryField("title",3.4)
;
echo $dismaxQuery;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&qf=location^4 price sku title^3.4

   
```

## See Also

 `SolrDisMaxQuery::removeQueryField()`
