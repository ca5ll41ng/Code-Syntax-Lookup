---
id: "en-php-function-solrutils-queryphrase"
language: "php"
lang: "en"
category: "function"
name: "SolrUtils::queryPhrase"
title: "Prepares a phrase from an unescaped lucene string"
signature: "public static string SolrUtils::queryPhrase(string $str)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrutils.queryphrase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares a phrase from an unescaped lucene string

## Description

```php
public static string SolrUtils::queryPhrase(string $str)
```

Prepares a phrase from an unescaped lucene string.

## Parameters

- **`$str`** — The lucene phrase.

## Return Values

Returns the phrase contained in double quotes.
