---
id: "en-php-function-solrinputdocument-merge"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::merge"
title: "Merges one input document into another"
signature: "public bool SolrInputDocument::merge(SolrInputDocument $sourceDoc, bool $overwrite = true)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Merges one input document into another

## Description

```php
public bool SolrInputDocument::merge(SolrInputDocument $sourceDoc, bool $overwrite = true)
```

Merges one input document into another.

## Parameters

- **`$sourceDoc`** — The source document.
- **`$overwrite`** — If this is `true` it will replace matching fields in the destination document.

## Return Values

Returns `true` on success or `false` on failure. In the future, this will be modified to return the number of fields in the new document.
