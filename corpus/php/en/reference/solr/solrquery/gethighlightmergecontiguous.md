---
id: "en-php-function-solrquery-gethighlightmergecontiguous"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightMergeContiguous"
title: "Returns whether or not the collapse contiguous fragments into a single fragment"
signature: "public bool SolrQuery::getHighlightMergeContiguous([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightmergecontiguous.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether or not the collapse contiguous fragments into a single fragment

## Description

```php
public bool SolrQuery::getHighlightMergeContiguous([string $field_override = ...])
```

Returns whether or not the collapse contiguous fragments into a single fragment. Accepts an optional field override.

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a boolean on success and `null` if not set.
