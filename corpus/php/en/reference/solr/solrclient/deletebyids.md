---
id: "en-php-function-solrclient-deletebyids"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::deleteByIds"
title: "Deletes by Ids"
signature: "public SolrUpdateResponse SolrClient::deleteByIds(array $ids)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.deletebyids.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes by Ids

## Description

```php
public SolrUpdateResponse SolrClient::deleteByIds(array $ids)
```

Deletes a collection of documents with the specified set of ids.

## Parameters

- **`$ids`** — An array of IDs representing the uniqueKey field declared in the schema for each document to be deleted. This must be an actual php variable.

## Return Values

Returns a `SolrUpdateResponse` on success and throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## See Also

`SolrClient::deleteById()` `SolrClient::deleteByQuery()` `SolrClient::deleteByQueries()`
