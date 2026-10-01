---
id: "en-php-function-solrquery-setfacet"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setFacet"
title: "Maps to the facet parameter. Enables or disables facetting"
signature: "public SolrQuery SolrQuery::setFacet(bool $flag)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setfacet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Maps to the facet parameter. Enables or disables facetting

## Description

```php
public SolrQuery SolrQuery::setFacet(bool $flag)
```

Enables or disables faceting.

## Parameters

- **`$value`** — `true` enables faceting and `false` disables it.

## Return Values

Returns the current SolrQuery object, if the return value is used.
