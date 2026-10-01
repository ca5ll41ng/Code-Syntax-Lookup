---
id: "en-php-function-solrclient-threads"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::threads"
title: "Checks the threads status"
signature: "public void SolrClient::threads()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.threads.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks the threads status

## Description

```php
public void SolrClient::threads()
```

Checks the threads status

## Parameters

This function has no parameters.

## Return Values

Returns a SolrGenericResponse object.

## Errors/Exceptions

Throws `SolrClientException` if the client failed, or there was a connection issue.

throws `SolrServerException` if the Solr Server failed to process the request.
