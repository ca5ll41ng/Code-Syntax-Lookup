---
id: "en-php-function-solrquery-addfilterquery"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addFilterQuery"
title: "Specifies a filter query"
signature: "public SolrQuery SolrQuery::addFilterQuery(string $fq)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addfilterquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies a filter query

## Description

```php
public SolrQuery SolrQuery::addFilterQuery(string $fq)
```

Specifies a filter query

## Parameters

- **`$fq`** — The filter query

## Return Values

Returns the current SolrQuery object.

## Examples

**`SolrQuery::addFilterQuery()` example**

```php


<?php

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
);

$client = new SolrClient($options);

$query = new SolrQuery();

$query->setQuery('*:*');

$query->addFilterQuery('color:blue,green');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response['facet_counts']['facet_fields']);

?>

    
```

The above example will output something similar to:

```text


 &fq=color:blue,green

    
```
