---
id: "en-php-function-solrquery-gethighlightquery"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightQuery"
title: "Return the highlight query"
signature: "public string|null SolrQuery::getHighlightQuery()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the highlight query

## Description

```php
public string|null SolrQuery::getHighlightQuery()
```

Returns previously set highlight query from the `hl.q` parameter. This parameter allows you to highlight different terms or fields than those being used to retrieve documents. See the [Highlighting](https://solr.apache.org/guide/solr/latest/query-guide/highlighting.html) section for more details.

## Parameters

This function has no parameters.

## Return Values

Returns a string that contains the highlight query of the current `SolrQuery`, or `null` if highlight query is not set.

## See Also

 `SolrQuery::setHighlightQuery()` `SolrQuery::getHighlightFields()` `SolrQuery::setHighlightFields()`
