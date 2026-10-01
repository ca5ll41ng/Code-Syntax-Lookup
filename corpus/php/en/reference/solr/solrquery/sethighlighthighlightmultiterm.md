---
id: "en-php-function-solrquery-sethighlighthighlightmultiterm"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightHighlightMultiTerm"
title: "Use SpanScorer to highlight phrase terms"
signature: "public SolrQuery SolrQuery::setHighlightHighlightMultiTerm(bool $flag)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlighthighlightmultiterm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Use SpanScorer to highlight phrase terms

## Description

```php
public SolrQuery SolrQuery::setHighlightHighlightMultiTerm(bool $flag)
```

Use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document.

## Parameters

- **`$flag`** — Whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document.

## Return Values

Returns the current SolrQuery object, if the return value is used.
