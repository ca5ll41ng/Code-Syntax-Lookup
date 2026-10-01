---
id: "en-php-function-solrclient-ping"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::ping"
title: "Checks if Solr server is still up"
signature: "public SolrPingResponse SolrClient::ping()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.ping.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if Solr server is still up

## Description

```php
public SolrPingResponse SolrClient::ping()
```

Checks if the Solr server is still alive. Sends a HEAD request to the Apache Solr server.

## Parameters

This function has no parameters.

## Return Values

Returns a `SolrPingResponse` object on success and throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to satisfy the request.

## Examples

**`SolrClient::ping()` example**

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

$pingresponse = $client->ping();

?>

    
```

The above example will output something similar to:

```text




    
```
