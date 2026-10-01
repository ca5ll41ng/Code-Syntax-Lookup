---
id: "en-php-function-solrquery-sethighlightsimplepost"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightSimplePost"
title: "Sets the text which appears after a highlighted term"
signature: "public SolrQuery SolrQuery::setHighlightSimplePost(string $simplePost, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightsimplepost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the text which appears after a highlighted term

## Description

```php
public SolrQuery SolrQuery::setHighlightSimplePost(string $simplePost, [string $field_override = ...])
```

Sets the text which appears before a highlighted term

## Parameters

- **`$simplePost`** — Sets the text which appears after a highlighted term — The default is </em>
- **`$field_override`** — The name of the field.

## Return Values

Returns an instance of `SolrQuery`.
