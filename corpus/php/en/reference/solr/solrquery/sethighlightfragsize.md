---
id: "en-php-function-solrquery-sethighlightfragsize"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightFragsize"
title: "The size of fragments to consider for highlighting"
signature: "public SolrQuery SolrQuery::setHighlightFragsize(int $size, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightfragsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The size of fragments to consider for highlighting

## Description

```php
public SolrQuery SolrQuery::setHighlightFragsize(int $size, [string $field_override = ...])
```

Sets the size, in characters, of fragments to consider for highlighting. "0" indicates that the whole field value should be used (no fragmenting).

## Parameters

- **`$size`** — The size, in characters, of fragments to consider for highlighting
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
