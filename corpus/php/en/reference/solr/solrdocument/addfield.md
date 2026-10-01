---
id: "en-php-function-solrdocument-addfield"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::addField"
title: "Adds a field to the document"
signature: "public bool SolrDocument::addField(string $fieldName, string $fieldValue)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.addfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a field to the document

## Description

```php
public bool SolrDocument::addField(string $fieldName, string $fieldValue)
```

This method adds a field to the SolrDocument instance.

## Parameters

- **`$fieldName`** — The name of the field
- **`$fieldValue`** — The value of the field.

## Return Values

Returns `true` on success or `false` on failure.
