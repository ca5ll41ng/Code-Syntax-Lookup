---
id: "en-php-function-solrcollapsefunction-setmax"
language: "php"
lang: "en"
category: "function"
name: "SolrCollapseFunction::setMax"
title: "Selects the group heads by the max value of a numeric field or function query"
signature: "public SolrCollapseFunction SolrCollapseFunction::setMax(string $max)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrcollapsefunction.setmax.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Selects the group heads by the max value of a numeric field or function query

## Description

```php
public SolrCollapseFunction SolrCollapseFunction::setMax(string $max)
```

Selects the group heads by the max value of a numeric field or function query.

## Parameters

- **`$max`**

## Return Values

`SolrCollapseFunction`

## Examples

**`SolrCollapseFunction::setMax()` example**

```php


<?php

$func = new SolrCollapseFunction('field_name');

$func->setMax('sum(cscore(),field(some_field))');

$query = new SolrQuery('*:*');

$query->collapse($func);

?>

   
```
