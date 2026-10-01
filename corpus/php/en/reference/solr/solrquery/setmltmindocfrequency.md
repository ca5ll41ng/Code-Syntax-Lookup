---
id: "en-php-function-solrquery-setmltmindocfrequency"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setMltMinDocFrequency"
title: "Sets the mltMinDoc frequency"
signature: "public SolrQuery SolrQuery::setMltMinDocFrequency(int $minDocFrequency)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setmltmindocfrequency.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the mltMinDoc frequency

## Description

```php
public SolrQuery SolrQuery::setMltMinDocFrequency(int $minDocFrequency)
```

The frequency at which words will be ignored which do not occur in at least this many docs.

## Parameters

- **`$minDocFrequency`** — Sets the frequency at which words will be ignored which do not occur in at least this many docs.

## Return Values

Returns the current SolrQuery object, if the return value is used.
