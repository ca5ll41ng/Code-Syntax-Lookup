---
id: "en-php-function-solrquery-addmltqueryfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addMltQueryField"
title: "Maps to mlt.qf"
signature: "public SolrQuery SolrQuery::addMltQueryField(string $field, float $boost)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addmltqueryfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to mlt.qf

## Description

```php
public SolrQuery SolrQuery::addMltQueryField(string $field, float $boost)
```

Maps to mlt.qf. It is used to specify query fields and their boosts

## Parameters

- **`$field`** — The name of the field
- **`$boost`** — Its boost value

## Return Values

Returns the current SolrQuery object, if the return value is used.
