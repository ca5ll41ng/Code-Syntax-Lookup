---
id: "en-php-function-solrquery-addhighlightfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addHighlightField"
title: "Maps to hl.fl"
signature: "public SolrQuery SolrQuery::addHighlightField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addhighlightfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to hl.fl

## Description

```php
public SolrQuery SolrQuery::addHighlightField(string $field)
```

Maps to hl.fl. This is used to specify that highlighted snippets should be generated for a particular field

## Parameters

- **`$field`** — Name of the field

## Return Values

Returns the current SolrQuery object, if the return value is used.
