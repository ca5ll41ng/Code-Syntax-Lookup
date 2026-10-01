---
id: "en-php-function-solrquery-setfacetmissing"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetMissing"
title: "Maps to facet.missing"
signature: "public SolrQuery SolrQuery::setFacetMissing(bool $flag, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetmissing.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to facet.missing

## Description

```php
public SolrQuery SolrQuery::setFacetMissing(bool $flag, [string $field_override = ...])
```

Used to indicate that in addition to the Term-based constraints of a facet field, a count of all matching results which have no value for the field should be computed

## Parameters

- **`$flag`** — `true` turns this feature on. `false` disables it.
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
