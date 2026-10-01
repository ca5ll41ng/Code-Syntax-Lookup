---
id: "en-php-function-solrquery-sethighlightalternatefield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightAlternateField"
title: "Specifies the backup field to use"
signature: "public SolrQuery SolrQuery::setHighlightAlternateField(string $field, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightalternatefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the backup field to use

## Description

```php
public SolrQuery SolrQuery::setHighlightAlternateField(string $field, [string $field_override = ...])
```

If a snippet cannot be generated because there were no matching terms, one can specify a field to use as the backup or default summary

## Parameters

- **`$field`** — The name of the backup field
- **`$field_override`** — The name of the field we are overriding this setting for.

## Return Values

Returns the current SolrQuery object, if the return value is used.
