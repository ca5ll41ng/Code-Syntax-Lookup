---
id: "en-php-function-solrquery-sethighlightusephrasehighlighter"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightUsePhraseHighlighter"
title: "Whether to highlight phrase terms only when they appear within the query phrase"
signature: "public SolrQuery SolrQuery::setHighlightUsePhraseHighlighter(bool $flag)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightusephrasehighlighter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether to highlight phrase terms only when they appear within the query phrase

## Description

```php
public SolrQuery SolrQuery::setHighlightUsePhraseHighlighter(bool $flag)
```

Sets whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document

## Parameters

- **`$value`** — Whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document

## Return Values

Returns the current SolrQuery object, if the return value is used.
