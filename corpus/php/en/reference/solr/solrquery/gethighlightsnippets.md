---
id: "en-php-function-solrquery-gethighlightsnippets"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightSnippets"
title: "Returns the maximum number of highlighted snippets to generate per field"
signature: "public int SolrQuery::getHighlightSnippets([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightsnippets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the maximum number of highlighted snippets to generate per field

## Description

```php
public int SolrQuery::getHighlightSnippets([string $field_override = ...])
```

Returns the maximum number of highlighted snippets to generate per field. Accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns an integer on success and `null` if not set.
