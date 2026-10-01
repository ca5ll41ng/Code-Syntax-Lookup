---
id: "en-php-function-solrquery-addfacetquery"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addFacetQuery"
title: "Adds a facet query"
signature: "public SolrQuery SolrQuery::addFacetQuery(string $facetQuery)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addfacetquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a facet query

## Description

```php
public SolrQuery SolrQuery::addFacetQuery(string $facetQuery)
```

Adds a facet query

## Parameters

- **`$facetQuery`** — The facet query

## Return Values

Returns the current SolrQuery object, if the return value is used.

## Examples

**`SolrQuery::addFacetField()` example**

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

$query = new SolrQuery('*:*');

$query->setFacet(true);

$query->addFacetQuery('price:[* TO 500]')->addFacetQuery('price:[500 TO *]');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response->facet_counts->facet_queries);

?>

    
```

The above example will output something similar to:

```text



SolrObject Object
(
    [price:[* TO 500]] => 14
    [price:[500 TO *]] => 2
)


    
```
