---
id: "en-php-function-solrquery-gethighlightsimplepre"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightSimplePre"
title: "Returns the text which appears before a highlighted term"
signature: "public string SolrQuery::getHighlightSimplePre([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightsimplepre.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the text which appears before a highlighted term

## Description

```php
public string SolrQuery::getHighlightSimplePre([string $field_override = ...])
```

Returns the text which appears before a highlighted term. Accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set.
