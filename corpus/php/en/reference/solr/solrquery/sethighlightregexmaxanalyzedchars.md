---
id: "en-php-function-solrquery-sethighlightregexmaxanalyzedchars"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightRegexMaxAnalyzedChars"
title: "Specify the maximum number of characters to analyze"
signature: "public SolrQuery SolrQuery::setHighlightRegexMaxAnalyzedChars(int $maxAnalyzedChars)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightregexmaxanalyzedchars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specify the maximum number of characters to analyze

## Description

```php
public SolrQuery SolrQuery::setHighlightRegexMaxAnalyzedChars(int $maxAnalyzedChars)
```

Specify the maximum number of characters to analyze from a field when using the regex fragmenter

## Parameters

- **`$maxAnalyzedChars`** — The maximum number of characters to analyze from a field when using the regex fragmenter

## Return Values

Returns the current SolrQuery object, if the return value is used.
