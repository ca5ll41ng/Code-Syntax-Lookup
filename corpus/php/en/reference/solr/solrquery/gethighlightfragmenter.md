---
id: "en-php-function-solrquery-gethighlightfragmenter"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightFragmenter"
title: "Returns the text snippet generator for highlighted text"
signature: "public string SolrQuery::getHighlightFragmenter([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightfragmenter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the text snippet generator for highlighted text

## Description

```php
public string SolrQuery::getHighlightFragmenter([string $field_override = ...])
```

Returns the text snippet generator for highlighted text. Accepts an optional field override.

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set.
