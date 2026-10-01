---
id: "en-php-function-solrquery-gethighlightalternatefield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightAlternateField"
title: "Returns the highlight field to use as backup or default"
signature: "public string SolrQuery::getHighlightAlternateField([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightalternatefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the highlight field to use as backup or default

## Description

```php
public string SolrQuery::getHighlightAlternateField([string $field_override = ...])
```

Returns the highlight field to use as backup or default. It accepts an optional override.

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set.
