---
id: "en-php-function-solrquery-gethighlightregexslop"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::getHighlightRegexSlop"
title: "Returns the deviation factor from the ideal fragment size"
signature: "public float SolrQuery::getHighlightRegexSlop()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.gethighlightregexslop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the deviation factor from the ideal fragment size

## Description

```php
public float SolrQuery::getHighlightRegexSlop()
```

Returns the factor by which the regex fragmenter can deviate from the ideal fragment size to accommodate the regular expression

## Parameters

This function has no parameters.

## Return Values

Returns a `float` on success and `null` if not set.
