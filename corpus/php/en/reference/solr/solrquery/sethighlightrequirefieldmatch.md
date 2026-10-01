---
id: "en-php-function-solrquery-sethighlightrequirefieldmatch"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightRequireFieldMatch"
title: "Require field matching during highlighting"
signature: "public SolrQuery SolrQuery::setHighlightRequireFieldMatch(bool $flag)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightrequirefieldmatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Require field matching during highlighting

## Description

```php
public SolrQuery SolrQuery::setHighlightRequireFieldMatch(bool $flag)
```

If `true`, then a field will only be highlighted if the query matched in this particular field.

This will only work if SolrQuery::setHighlightUsePhraseHighlighter() was set to `true`

## Parameters

- **`$flag`** — `true` or `false`

## Return Values

Returns the current SolrQuery object, if the return value is used.
