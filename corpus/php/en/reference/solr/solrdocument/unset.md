---
id: "en-php-function-solrdocument-unset"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::__unset"
title: "Removes a field from the document"
signature: "public bool SolrDocument::__unset(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.unset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a field from the document

## Description

```php
public bool SolrDocument::__unset(string $fieldName)
```

Removes a field from the document when the field is access as an object property.

## Parameters

- **`$fieldName`** — The name of the field.

## Return Values

Returns `true` on success or `false` on failure.
