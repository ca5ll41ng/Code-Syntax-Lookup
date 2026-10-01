---
id: "en-php-function-solrquery-gettermsprefix"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getTermsPrefix"
title: "Returns the term prefix"
signature: "public string SolrQuery::getTermsPrefix()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gettermsprefix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the term prefix

## Description

```php
public string SolrQuery::getTermsPrefix()
```

Returns the prefix to which matching terms must be restricted. This will restrict matches to only terms that start with the prefix

## Parameters

This function has no parameters.

## Return Values

Returns a string on success and `null` if not set.
