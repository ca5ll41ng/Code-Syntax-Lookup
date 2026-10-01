---
id: "en-php-function-solrdocument-fieldexists"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::fieldExists"
title: "Checks if a field exists in the document"
signature: "public bool SolrDocument::fieldExists(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.fieldexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if a field exists in the document

## Description

```php
public bool SolrDocument::fieldExists(string $fieldName)
```

Checks if the requested field as a valid fieldname in the document.

## Parameters

- **`$fieldName`** — The name of the field.

## Return Values

Returns `true` if the field is present and `false` if it does not.
