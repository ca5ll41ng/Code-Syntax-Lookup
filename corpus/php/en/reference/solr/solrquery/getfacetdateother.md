---
id: "en-php-function-solrquery-getfacetdateother"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetDateOther"
title: "Returns the value for the facet.date.other parameter"
signature: "public array SolrQuery::getFacetDateOther([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetdateother.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value for the facet.date.other parameter

## Description

```php
public array SolrQuery::getFacetDateOther([string $field_override = ...])
```

Returns the value for the facet.date.other parameter. This method accepts an optional field override.

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns an `array` on success and `null` if not set.
