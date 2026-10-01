---
id: "en-php-function-solrquery-getfacetdategap"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetDateGap"
title: "Returns the value of the facet.date.gap parameter"
signature: "public string SolrQuery::getFacetDateGap([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetdategap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of the facet.date.gap parameter

## Description

```php
public string SolrQuery::getFacetDateGap([string $field_override = ...])
```

Returns the value of the facet.date.gap parameter. It accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set
