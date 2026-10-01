---
id: "en-php-function-solrquery-setfacetprefix"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetPrefix"
title: "Specifies a string prefix with which to limits the terms on which to facet"
signature: "public SolrQuery SolrQuery::setFacetPrefix(string $prefix, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetprefix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies a string prefix with which to limits the terms on which to facet

## Description

```php
public SolrQuery SolrQuery::setFacetPrefix(string $prefix, [string $field_override = ...])
```

Specifies a string prefix with which to limits the terms on which to facet.

## Parameters

- **`$prefix`** — The prefix string
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
