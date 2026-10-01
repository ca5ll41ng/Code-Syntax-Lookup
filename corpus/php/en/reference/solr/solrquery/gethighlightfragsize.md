---
id: "en-php-function-solrquery-gethighlightfragsize"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightFragsize"
title: "Returns the number of characters of fragments to consider for highlighting"
signature: "public int SolrQuery::getHighlightFragsize([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightfragsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of characters of fragments to consider for highlighting

## Description

```php
public int SolrQuery::getHighlightFragsize([string $field_override = ...])
```

Returns the number of characters of fragments to consider for highlighting. Zero implies no fragmenting. The entire field should be used.

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns an integer on success or `null` if not set.
