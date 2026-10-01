---
id: "en-php-function-solrdocument-offsetset"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::offsetSet"
title: "Adds a field to the document"
signature: "public void SolrDocument::offsetSet(string $fieldName, string $fieldValue)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a field to the document

## Description

```php
public void SolrDocument::offsetSet(string $fieldName, string $fieldValue)
```

Used when the object is treated as an array to add a field to the document.

## Parameters

- **`$fieldName`** — The name of the field.
- **`$fieldValue`** — The value for this field.

## Return Values

Returns `true` on success or `false` on failure.
