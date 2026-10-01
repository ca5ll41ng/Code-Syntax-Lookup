---
id: "en-php-function-solrinputdocument-getfield"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::getField"
title: "Retrieves a field by name"
signature: "public SolrDocumentField SolrInputDocument::getField(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.getfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a field by name

## Description

```php
public SolrDocumentField SolrInputDocument::getField(string $fieldName)
```

Retrieves a field in the document.

## Parameters

- **`$fieldName`** — The name of the field.

## Return Values

Returns a SolrDocumentField object on success and `false` on failure.
