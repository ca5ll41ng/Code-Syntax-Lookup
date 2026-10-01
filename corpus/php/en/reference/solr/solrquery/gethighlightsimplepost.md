---
id: "en-php-function-solrquery-gethighlightsimplepost"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightSimplePost"
title: "Returns the text which appears after a highlighted term"
signature: "public string SolrQuery::getHighlightSimplePost([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightsimplepost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the text which appears after a highlighted term

## Description

```php
public string SolrQuery::getHighlightSimplePost([string $field_override = ...])
```

Returns the text which appears after a highlighted term. Accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set.
