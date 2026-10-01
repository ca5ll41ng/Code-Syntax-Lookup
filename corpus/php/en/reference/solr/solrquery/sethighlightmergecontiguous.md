---
id: "en-php-function-solrquery-sethighlightmergecontiguous"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightMergeContiguous"
title: "Whether or not to collapse contiguous fragments into a single fragment"
signature: "public SolrQuery SolrQuery::setHighlightMergeContiguous(bool $flag, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightmergecontiguous.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether or not to collapse contiguous fragments into a single fragment

## Description

```php
public SolrQuery SolrQuery::setHighlightMergeContiguous(bool $flag, [string $field_override = ...])
```

Whether or not to collapse contiguous fragments into a single fragment

## Parameters

- **`$value`** — Whether or not to collapse contiguous fragments into a single fragment
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
