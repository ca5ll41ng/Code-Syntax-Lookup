---
id: "en-php-function-solrquery-gethighlightusephrasehighlighter"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightUsePhraseHighlighter"
title: "Returns the state of the hl.usePhraseHighlighter parameter"
signature: "public bool SolrQuery::getHighlightUsePhraseHighlighter()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightusephrasehighlighter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the state of the hl.usePhraseHighlighter parameter

## Description

```php
public bool SolrQuery::getHighlightUsePhraseHighlighter()
```

Returns whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document.

## Parameters

This function has no parameters.

## Return Values

Returns a boolean on success and `null` if not set.
