---
id: "en-php-function-solrclient-rollback"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::rollback"
title: "Rollbacks all add/deletes made to the index since the last commit"
signature: "public SolrUpdateResponse SolrClient::rollback()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.rollback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rollbacks all add/deletes made to the index since the last commit

## Description

```php
public SolrUpdateResponse SolrClient::rollback()
```

Rollbacks all add/deletes made to the index since the last commit. It neither calls any event listeners nor creates a new searcher.

## Parameters

This function has no parameters.

## Return Values

Returns a SolrUpdateResponse on success or throws a SolrClientException on failure.

## See Also

`SolrClient::commit()` `SolrClient::optimize()`
