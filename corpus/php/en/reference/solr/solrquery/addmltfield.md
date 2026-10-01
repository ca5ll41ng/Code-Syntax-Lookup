---
id: "en-php-function-solrquery-addmltfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addMltField"
title: "Sets a field to use for similarity"
signature: "public SolrQuery SolrQuery::addMltField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addmltfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a field to use for similarity

## Description

```php
public SolrQuery SolrQuery::addMltField(string $field)
```

Maps to mlt.fl. It specifies that a field should be used for similarity.

## Parameters

- **`$field`** — The name of the field

## Return Values

Returns the current SolrQuery object, if the return value is used.
