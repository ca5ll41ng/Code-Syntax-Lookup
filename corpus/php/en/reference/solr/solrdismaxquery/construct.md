---
id: "en-php-function-solrdismaxquery-construct"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::__construct"
title: "Class Constructor"
signature: "public SolrDisMaxQuery::__construct([string $q = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Class Constructor

## Description

```php
public SolrDisMaxQuery::__construct([string $q = ...])
```

Class constructor initializes the object and sets the q parameter if passed

## Parameters

- **`$q`** — Search Query (q parameter)

## Return Values

## Errors/Exceptions

Emits `SolrIllegalArgumentException` in case of an invalid parameter was passed.

## Examples

**`SolrDisMaxQuery::__construct()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
echo $dismaxQuery;

?>

   
```

The above example will output:

```text


q=lucene&defType=edismax

   
```
