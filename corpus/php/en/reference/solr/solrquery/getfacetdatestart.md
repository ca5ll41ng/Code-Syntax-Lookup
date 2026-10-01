---
id: "en-php-function-solrquery-getfacetdatestart"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getFacetDateStart"
title: "Returns the lower bound for the first date range for all date faceting on this field"
signature: "public string SolrQuery::getFacetDateStart([string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.getfacetdatestart.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the lower bound for the first date range for all date faceting on this field

## Description

```php
public string SolrQuery::getFacetDateStart([string $field_override = ...])
```

Returns the lower bound for the first date range for all date faceting on this field. Accepts an optional field override

## Parameters

- **`$field_override`** — The name of the field

## Return Values

Returns a string on success and `null` if not set
