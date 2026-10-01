---
id: "en-php-function-solrquery-settermsreturnraw"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setTermsReturnRaw"
title: "Return the raw characters of the indexed term"
signature: "public SolrQuery SolrQuery::setTermsReturnRaw(bool $flag)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.settermsreturnraw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the raw characters of the indexed term

## Description

```php
public SolrQuery SolrQuery::setTermsReturnRaw(bool $flag)
```

If true, return the raw characters of the indexed term, regardless of if it is human readable

## Parameters

- **`$value`** — `true` or `false`

## Return Values

Returns the current SolrQuery object, if the return value is used.
