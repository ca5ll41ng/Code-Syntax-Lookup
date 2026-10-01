---
id: "en-php-function-solrclient-system"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::system"
title: "Retrieve Solr Server information"
signature: "public void SolrClient::system()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.system.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve Solr Server information

## Description

```php
public void SolrClient::system()
```

Retrieve Solr Server information

## Parameters

This function has no parameters.

## Return Values

Returns a `SolrGenericResponse` object on success.

## Errors/Exceptions

Emits `SolrClientException` if the client failed, or there was a connection issue.

Emits `SolrServerException` if the Solr Server failed to satisfy the query.
