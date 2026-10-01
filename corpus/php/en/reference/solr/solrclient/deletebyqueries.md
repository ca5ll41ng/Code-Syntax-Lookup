---
id: "en-php-function-solrclient-deletebyqueries"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::deleteByQueries"
title: "Removes all documents matching any of the queries"
signature: "public SolrUpdateResponse SolrClient::deleteByQueries(array $queries)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.deletebyqueries.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all documents matching any of the queries

## Description

```php
public SolrUpdateResponse SolrClient::deleteByQueries(array $queries)
```

Removes all documents matching any of the queries

## Parameters

- **`$queries`** — The array of queries. This must be an actual php variable.

## Return Values

Returns a SolrUpdateResponse on success and throws a SolrClientException on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## See Also

`SolrClient::deleteById()` `SolrClient::deleteByIds()` `SolrClient::deleteByQuery()`
