---
id: "en-php-function-solrquery-addfield"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::addField"
title: "Specifies which fields to return in the result"
signature: "public SolrQuery SolrQuery::addField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.addfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies which fields to return in the result

## Description

```php
public SolrQuery SolrQuery::addField(string $field)
```

This method is used to used to specify a set of fields to return, thereby restricting the amount of data returned in the response.

It should be called multiple time, once for each field name.

## Parameters

- **`$field`** — The name of the field

## Return Values

Returns the current SolrQuery object
