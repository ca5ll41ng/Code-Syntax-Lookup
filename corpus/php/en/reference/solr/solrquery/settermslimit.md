---
id: "en-php-function-solrquery-settermslimit"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setTermsLimit"
title: "Sets the maximum number of terms to return"
signature: "public SolrQuery SolrQuery::setTermsLimit(int $limit)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.settermslimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the maximum number of terms to return

## Description

```php
public SolrQuery SolrQuery::setTermsLimit(int $limit)
```

Sets the maximum number of terms to return

## Parameters

- **`$limit`** — The maximum number of terms to return. All the terms will be returned if the limit is negative.

## Return Values

Returns the current SolrQuery object, if the return value is used.
