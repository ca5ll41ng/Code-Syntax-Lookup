---
id: "en-php-function-solrquery-sethighlightregexslop"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightRegexSlop"
title: "Sets the factor by which the regex fragmenter can stray from the ideal fragment size"
signature: "public SolrQuery SolrQuery::setHighlightRegexSlop(float $factor)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightregexslop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the factor by which the regex fragmenter can stray from the ideal fragment size

## Description

```php
public SolrQuery SolrQuery::setHighlightRegexSlop(float $factor)
```

The factor by which the regex fragmenter can stray from the ideal fragment size ( specfied by SolrQuery::setHighlightFragsize )to accommodate the regular expression

## Parameters

- **`$factor`** — The factor by which the regex fragmenter can stray from the ideal fragment size

## Return Values

Returns the current SolrQuery object, if the return value is used.
