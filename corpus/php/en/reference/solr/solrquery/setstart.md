---
id: "en-php-function-solrquery-setstart"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setStart"
title: "Specifies the number of rows to skip"
signature: "public SolrQuery SolrQuery::setStart(int $start)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setstart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the number of rows to skip

## Description

```php
public SolrQuery SolrQuery::setStart(int $start)
```

Specifies the number of rows to skip. Useful in pagination of results.

## Parameters

- **`$start`** — The number of rows to skip.

## Return Values

Returns the current SolrQuery object.
