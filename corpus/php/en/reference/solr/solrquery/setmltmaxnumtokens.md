---
id: "en-php-function-solrquery-setmltmaxnumtokens"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setMltMaxNumTokens"
title: "Specifies the maximum number of tokens to parse"
signature: "public SolrQuery SolrQuery::setMltMaxNumTokens(int $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setmltmaxnumtokens.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the maximum number of tokens to parse

## Description

```php
public SolrQuery SolrQuery::setMltMaxNumTokens(int $value)
```

Specifies the maximum number of tokens to parse in each example doc field that is not stored with TermVector support.

## Parameters

- **`$value`** — The maximum number of tokens to parse

## Return Values

Returns the current SolrQuery object, if the return value is used.
