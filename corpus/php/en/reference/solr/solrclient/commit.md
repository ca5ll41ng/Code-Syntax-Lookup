---
id: "en-php-function-solrclient-commit"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::commit"
title: "Finalizes all add/deletes made to the index"
signature: "public SolrUpdateResponse SolrClient::commit(bool $softCommit = false, bool $waitSearcher = true, bool $expungeDeletes = false)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Finalizes all add/deletes made to the index

## Description

```php
public SolrUpdateResponse SolrClient::commit(bool $softCommit = false, bool $waitSearcher = true, bool $expungeDeletes = false)
```

This method finalizes all add/deletes made to the index.

## Parameters

- **`$softCommit`** — This will refresh the 'view' of the index in a more performant manner, but without "on-disk" guarantees. (Solr4.0+) — A soft commit is much faster since it only makes index changes visible and does not fsync index files or write a new index descriptor. If the JVM crashes or there is a loss of power, changes that occurred after the last hard commit will be lost. Search collections that have near-real-time requirements (that want index changes to be quickly visible to searches) will want to soft commit often but hard commit less frequently.
- **`$waitSearcher`** — block until a new searcher is opened and registered as the main query searcher, making the changes visible.
- **`$expungeDeletes`** — Merge segments with deletes away. (Solr1.4+)

## Return Values

Returns a `SolrUpdateResponse` object on success or throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## Changelog

|  |  |
| --- | --- |
| PECL solr 1.1.0, PECL solr 2.0.0 | $maxSegments removed |
| PECL solr 2.0.0b | API Changed: SolrClient::commit ([ int $maxSegments = 0 [, bool $softCommit = false [, bool $waitSearcher = true[, bool $expungeDeletes = false ]]] ) |
| PECL solr 0.9.2 | Signature: SolrClient::commit ([ int $maxSegments = 1 [, bool $waitFlush = true [, bool $waitSearcher = true ]]] ). $waitFlush: Block until index changes are flushed to disk. |

## Notes

> PECL Solr >= 2.0 only supports Solr Server >= 4.0

## See Also

`SolrClient::optimize()` `SolrClient::rollback()`
