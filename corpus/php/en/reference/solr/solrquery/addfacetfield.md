---
id: "en-php-function-solrquery-addfacetfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addFacetField"
title: "Adds another field to the facet"
signature: "public SolrQuery SolrQuery::addFacetField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addfacetfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds another field to the facet

## Description

```php
public SolrQuery SolrQuery::addFacetField(string $field)
```

Adds another field to the facet

## Parameters

- **`$field`** — The name of the field

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

$query = new SolrQuery();

$query->setQuery($query);

$query->addField('price')->addField('color');

$query->setFacet(true);

$query->addFacetField('price')->addFacetField('color');

$query_response = $client->query($query);

$response = $query_response->getResponse();

print_r($response['facet_counts']['facet_fields']);

?>

    
```

The above example will output something similar to:

```text



SolrObject Object
(
    [color] => SolrObject Object
        (
            [blue] => 20
            [green] => 100
        )

)

    
```
