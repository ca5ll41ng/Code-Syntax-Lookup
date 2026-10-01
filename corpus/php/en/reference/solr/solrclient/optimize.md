---
id: "en-php-function-solrclient-optimize"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::optimize"
title: "Defragments the index"
signature: "public SolrUpdateResponse SolrClient::optimize(int $maxSegments = 1, bool $softCommit = true, bool $waitSearcher = true)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.optimize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Defragments the index

## Description

```php
public SolrUpdateResponse SolrClient::optimize(int $maxSegments = 1, bool $softCommit = true, bool $waitSearcher = true)
```

Defragments the index for faster search performance.

## Parameters

- **`$maxSegments`** — Optimizes down to at most this number of segments. Since Solr 1.3
- **`$softCommit`** — This will refresh the 'view' of the index in a more performant manner, but without "on-disk" guarantees. (Solr4.0+)
- **`$waitSearcher`** — Block until a new searcher is opened and registered as the main query searcher, making the changes visible.

## Return Values

Returns a SolrUpdateResponse on success or throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## Notes

> PECL Solr >= 2.0 only supports Solr Server >= 4.0
>
> Prior to PECL Solr 2.0 this method used to accept these arguments "int $maxSegments, bool $waitFlush, bool $waitSearcher".

## See Also

`SolrClient::commit()` `SolrClient::rollback()`
