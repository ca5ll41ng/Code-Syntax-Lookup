---
id: "en-php-function-solrquery-sethighlightsnippets"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightSnippets"
title: "Sets the maximum number of highlighted snippets to generate per field"
signature: "public SolrQuery SolrQuery::setHighlightSnippets(int $value, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightsnippets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the maximum number of highlighted snippets to generate per field

## Description

```php
public SolrQuery SolrQuery::setHighlightSnippets(int $value, [string $field_override = ...])
```

Sets the maximum number of highlighted snippets to generate per field

## Parameters

- **`$value`** — The maximum number of highlighted snippets to generate per field
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
