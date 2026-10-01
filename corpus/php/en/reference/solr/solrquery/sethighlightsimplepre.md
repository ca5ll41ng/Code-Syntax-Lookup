---
id: "en-php-function-solrquery-sethighlightsimplepre"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightSimplePre"
title: "Sets the text which appears before a highlighted term"
signature: "public SolrQuery SolrQuery::setHighlightSimplePre(string $simplePre, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightsimplepre.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the text which appears before a highlighted term

## Description

```php
public SolrQuery SolrQuery::setHighlightSimplePre(string $simplePre, [string $field_override = ...])
```

Sets the text which appears before a highlighted term

The default is <em>

## Parameters

- **`$simplePre`** — The text which appears before a highlighted term
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
