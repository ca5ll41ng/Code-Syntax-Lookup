---
id: "en-php-function-solrquery-gethighlightformatter"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightFormatter"
title: "Returns the formatter for the highlighted output"
signature: "public string SolrQuery::getHighlightFormatter([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightformatter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the formatter for the highlighted output

## Description

```php
public string SolrQuery::getHighlightFormatter([string $field_override = ...])
```

Returns the formatter for the highlighted output

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set.
