---
id: "en-php-function-solrclient-request"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::request"
title: "Sends a raw update request"
signature: "public SolrUpdateResponse SolrClient::request(string $raw_request)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends a raw update request

## Description

```php
public SolrUpdateResponse SolrClient::request(string $raw_request)
```

Sends a raw XML update request to the server

## Parameters

- **`$raw_request`** — An XML string with the raw request to the server.

## Return Values

Returns a `SolrUpdateResponse` on success. Throws an exception on failure.

## Errors/Exceptions

Throws `SolrIllegalArgumentException` if `$raw_request` was an empty string

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to satisfy the query.

## Examples

**`SolrClient::request()` example**

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

$update_response = $client->request("<commit/>");

$response = $update_response->getResponse();

print_r($response);
?>

    
```

The above example will output something similar to:

```text


...

    
```
