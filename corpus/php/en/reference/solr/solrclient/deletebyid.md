---
id: "en-php-function-solrclient-deletebyid"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::deleteById"
title: "Delete by Id"
signature: "public SolrUpdateResponse SolrClient::deleteById(string $id)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.deletebyid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete by Id

## Description

```php
public SolrUpdateResponse SolrClient::deleteById(string $id)
```

Deletes the document with the specified ID. Where ID is the value of the uniqueKey field declared in the schema

## Parameters

- **`$id`** — The value of the uniqueKey field declared in the schema

## Return Values

Returns a `SolrUpdateResponse` on success and throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## See Also

`SolrClient::deleteByIds()` `SolrClient::deleteByQuery()` `SolrClient::deleteByQueries()`
