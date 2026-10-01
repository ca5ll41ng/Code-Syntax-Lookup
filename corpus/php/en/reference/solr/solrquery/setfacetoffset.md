---
id: "en-php-function-solrquery-setfacetoffset"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetOffset"
title: "Sets the offset into the list of constraints to allow for pagination"
signature: "public SolrQuery SolrQuery::setFacetOffset(int $offset, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetoffset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the offset into the list of constraints to allow for pagination

## Description

```php
public SolrQuery SolrQuery::setFacetOffset(int $offset, [string $field_override = ...])
```

Sets the offset into the list of constraints to allow for pagination.

## Parameters

- **`$offset`** — The offset
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
