---
id: "en-php-function-solrquery-sethighlightformatter"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightFormatter"
title: "Specify a formatter for the highlight output"
signature: "public SolrQuery SolrQuery::setHighlightFormatter(string $formatter, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightformatter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specify a formatter for the highlight output

## Description

```php
public SolrQuery SolrQuery::setHighlightFormatter(string $formatter, [string $field_override = ...])
```

Specify a formatter for the highlight output.

## Parameters

- **`$formatter`** — Currently the only legal value is "simple"
- **`$field_override`** — The name of the field.

## Return Values

Returns an instance of `SolrQuery`.
