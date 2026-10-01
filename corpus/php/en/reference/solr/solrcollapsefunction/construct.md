---
id: "en-php-function-solrcollapsefunction-construct"
language: "php"
lang: "en"
category: "function"
name: "SolrCollapseFunction::__construct"
title: "Constructor"
signature: "public SolrCollapseFunction::__construct([string $field = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrcollapsefunction.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructor

## Description

```php
public SolrCollapseFunction::__construct([string $field = ...])
```

Collapse Function constructor

## Parameters

- **`$field`** — The field name to collapse on. — In order to collapse a result. The field type must be a single valued String, Int or Float.

## Examples

**`SolrCollapseFunction::__construct()` example**

```php


<?php

include "bootstrap.php";

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
    'path'     => SOLR_SERVER_PATH
);

$client = new SolrClient($options);

$query = new SolrQuery('*:*');

$func = new SolrCollapseFunction('field_name');

$func->setMax('sum(cscore(),field(some_other_field))');
$func->setSize(100);
$func->setNullPolicy(SolrCollapseFunction::NULLPOLICY_EXPAND);

$query->collapse($func);

$queryResponse = $client->query($query);

$response = $queryResponse->getResponse();

print_r($response);

?>

   
```

## See Also

 `SolrQuery::collapse()`
