---
id: "en-php-function-solrquery-setechoparams"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setEchoParams"
title: "Determines what kind of parameters to include in the response"
signature: "public SolrQuery SolrQuery::setEchoParams(string $type)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.setechoparams.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines what kind of parameters to include in the response

## Description

```php
public SolrQuery SolrQuery::setEchoParams(string $type)
```

Instructs Solr what kinds of Request parameters should be included in the response for debugging purposes, legal values include:

- none - don't include any request parameters for debugging - explicit - include the parameters explicitly specified by the client in the request - all - include all parameters involved in this request, either specified explicitly by the client, or implicit because of the request handler configuration.

## Parameters

- **`$type`** — The type of parameters to include

## Return Values

Returns the current SolrQuery object, if the return value is used.
