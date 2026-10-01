---
id: "en-php-function-solrquery-sethighlightfragmenter"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightFragmenter"
title: "Sets a text snippet generator for highlighted text"
signature: "public SolrQuery SolrQuery::setHighlightFragmenter(string $fragmenter, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightfragmenter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a text snippet generator for highlighted text

## Description

```php
public SolrQuery SolrQuery::setHighlightFragmenter(string $fragmenter, [string $field_override = ...])
```

Specify a text snippet generator for highlighted text.

## Parameters

- **`$fragmenter`** — The standard fragmenter is gap. Another option is regex, which tries to create fragments that resembles a certain regular expression
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
