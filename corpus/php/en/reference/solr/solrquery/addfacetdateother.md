---
id: "en-php-function-solrquery-addfacetdateother"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addFacetDateOther"
title: "Adds another facet.date.other parameter"
signature: "public SolrQuery SolrQuery::addFacetDateOther(string $value, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addfacetdateother.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds another facet.date.other parameter

## Description

```php
public SolrQuery SolrQuery::addFacetDateOther(string $value, [string $field_override = ...])
```

Sets the facet.date.other parameter. Accepts an optional field override

## Parameters

- **`$value`** — The value to use.
- **`$field_override`** — The field name for the override.

## Return Values

Returns the current SolrQuery object, if the return value is used.
