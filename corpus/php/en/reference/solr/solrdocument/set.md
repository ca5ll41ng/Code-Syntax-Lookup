---
id: "en-php-function-solrdocument-set"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::__set"
title: "Adds another field to the document"
signature: "public bool SolrDocument::__set(string $fieldName, string $fieldValue)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds another field to the document

## Description

```php
public bool SolrDocument::__set(string $fieldName, string $fieldValue)
```

Adds another field to the document. Used to set the fields as new properties.

## Parameters

- **`$fieldName`** — Name of the field.
- **`$fieldValue`** — Field value.

## Return Values

Returns `true` on success or `false` on failure.
