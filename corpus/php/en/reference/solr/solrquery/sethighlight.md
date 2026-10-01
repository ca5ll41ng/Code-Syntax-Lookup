---
id: "en-php-function-solrquery-sethighlight"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlight"
title: "Enables or disables highlighting"
signature: "public SolrQuery SolrQuery::setHighlight(bool $flag)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlight.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enables or disables highlighting

## Description

```php
public SolrQuery SolrQuery::setHighlight(bool $flag)
```

Setting it to `true` enables highlighted snippets to be generated in the query response.

Setting it to `false` disables highlighting

## Parameters

- **`$flag`** — Enable or disable highlighting

## Return Values

Returns the current SolrQuery object, if the return value is used.
