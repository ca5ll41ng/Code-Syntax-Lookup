---
id: "en-php-function-solrdocument-getfield"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::getField"
title: "Retrieves a field by name"
signature: "public SolrDocumentField SolrDocument::getField(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.getfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a field by name

## Description

```php
public SolrDocumentField SolrDocument::getField(string $fieldName)
```

Retrieves a field by name.

## Parameters

- **`$fieldName`** — Name of the field.

## Return Values

Returns a SolrDocumentField on success and `false` on failure.
