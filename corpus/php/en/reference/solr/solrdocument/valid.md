---
id: "en-php-function-solrdocument-valid"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::valid"
title: "Checks if the current position internally is still valid"
signature: "public bool SolrDocument::valid()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the current position internally is still valid

## Description

```php
public bool SolrDocument::valid()
```

Checks if the current position internally is still valid. It is used during foreach operations.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success and `false` if the current position is no longer valid.
