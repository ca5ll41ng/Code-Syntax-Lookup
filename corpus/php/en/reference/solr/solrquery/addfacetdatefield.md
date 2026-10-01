---
id: "en-php-function-solrquery-addfacetdatefield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addFacetDateField"
title: "Maps to facet.date"
signature: "public SolrQuery SolrQuery::addFacetDateField(string $dateField)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addfacetdatefield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to facet.date

## Description

```php
public SolrQuery SolrQuery::addFacetDateField(string $dateField)
```

This method allows you to specify a field which should be treated as a facet.

It can be used multiple times with different field names to indicate multiple facet fields

## Parameters

- **`$dateField`** — The name of the date field.

## Return Values

Returns a SolrQuery object.
