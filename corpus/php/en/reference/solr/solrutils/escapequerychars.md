---
id: "en-php-function-solrutils-escapequerychars"
language: "php"
lang: "en"
category: "function"
name: "SolrUtils::escapeQueryChars"
title: "Escapes a lucene query string"
signature: "public static string|false SolrUtils::escapeQueryChars(string $str)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrutils.escapequerychars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Escapes a lucene query string

## Description

```php
public static string|false SolrUtils::escapeQueryChars(string $str)
```

Lucene supports escaping special characters that are part of the query syntax.

The current list special characters are:

+ - && || ! ( ) { } [ ] ^ " ~ * ? : \ /

These characters are part of the query syntax and must be escaped

## Parameters

- **`$str`** — This is the query string to be escaped.

## Return Values

Returns the escaped string or `false` on failure.
