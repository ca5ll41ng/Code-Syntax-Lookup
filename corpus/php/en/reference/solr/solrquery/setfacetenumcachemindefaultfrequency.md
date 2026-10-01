---
id: "en-php-function-solrquery-setfacetenumcachemindefaultfrequency"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacetEnumCacheMinDefaultFrequency"
title: "Sets the minimum document frequency used for determining term count"
signature: "public SolrQuery SolrQuery::setFacetEnumCacheMinDefaultFrequency(int $frequency, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacetenumcachemindefaultfrequency.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the minimum document frequency used for determining term count

## Description

```php
public SolrQuery SolrQuery::setFacetEnumCacheMinDefaultFrequency(int $frequency, [string $field_override = ...])
```

Sets the minimum document frequency used for determining term count

## Parameters

- **`$value`** — The minimum frequency
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
