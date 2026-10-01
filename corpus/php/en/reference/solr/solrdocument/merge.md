---
id: "en-php-function-solrdocument-merge"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::merge"
title: "Merges source to the current SolrDocument"
signature: "public bool SolrDocument::merge(SolrDocument $sourceDoc, bool $overwrite = true)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Merges source to the current SolrDocument

## Description

```php
public bool SolrDocument::merge(SolrDocument $sourceDoc, bool $overwrite = true)
```

Merges source to the current SolrDocument.

## Parameters

- **`$sourceDoc`** — The source document.
- **`$overwrite`** — If this is `true` then fields with the same name in the destination document will be overwritten.

## Return Values

Returns `true` on success or `false` on failure.
