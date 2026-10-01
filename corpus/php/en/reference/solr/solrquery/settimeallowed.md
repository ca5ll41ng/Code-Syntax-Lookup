---
id: "en-php-function-solrquery-settimeallowed"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setTimeAllowed"
title: "The time allowed for search to finish"
signature: "public SolrQuery SolrQuery::setTimeAllowed(int $timeAllowed)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.settimeallowed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The time allowed for search to finish

## Description

```php
public SolrQuery SolrQuery::setTimeAllowed(int $timeAllowed)
```

The time allowed for a search to finish. This value only applies to the search and not to requests in general. Time is in milliseconds. Values less than or equal to zero implies no time restriction. Partial results may be returned, if there are any.

## Parameters

- **`$timeAllowed`** — The time allowed for a search to finish.

## Return Values

Returns the current SolrQuery object, if the return value is used.
