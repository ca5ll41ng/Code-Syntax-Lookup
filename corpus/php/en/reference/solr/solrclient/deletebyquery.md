---
id: "en-php-function-solrclient-deletebyquery"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::deleteByQuery"
title: "Deletes all documents matching the given query"
signature: "public SolrUpdateResponse SolrClient::deleteByQuery(string $query)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.deletebyquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes all documents matching the given query

## Description

```php
public SolrUpdateResponse SolrClient::deleteByQuery(string $query)
```

Deletes all documents matching the given query.

## Parameters

- **`$query`** — The query

## Return Values

Returns a `SolrUpdateResponse` on success and throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## Examples

**`SolrQuery::deleteByQuery()` example**

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

//This will erase the entire index
$client->deleteByQuery("*:*");
$client->commit();

?>

    
```

## See Also

`SolrClient::deleteById()` `SolrClient::deleteByIds()` `SolrClient::deleteByQueries()`
