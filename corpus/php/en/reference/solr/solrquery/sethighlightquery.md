---
id: "en-php-function-solrquery-sethighlightquery"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightQuery"
title: "A query designated for highlighting"
signature: "public SolrQuery SolrQuery::setHighlightQuery(string $q)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# A query designated for highlighting

## Description

```php
public SolrQuery SolrQuery::setHighlightQuery(string $q)
```

A query to use for highlighting and which will be set as the value of the Solr `hl.q` parameter. This parameter allows one to highlight different terms or fields than those being used to retrieve documents.

Default value when not set: the value of the request's `q` parameter.

See the [Highlighting](https://solr.apache.org/guide/solr/latest/query-guide/highlighting.html) section for more details about the Solr `hl.q` parameter.

## Parameters

- **`$q`** — Highlight Query.

## Return Values

Returns the current `SolrQuery` object.

## See Also

 `SolrQuery::getHighlightQuery()` `SolrQuery::setHighlightFields()` `SolrQuery::getHighlightFields()`
