---
id: "en-php-function-solrdocument-offsetget"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::offsetGet"
title: "Retrieves a field"
signature: "public SolrDocumentField SolrDocument::offsetGet(string $fieldName)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves a field

## Description

```php
public SolrDocumentField SolrDocument::offsetGet(string $fieldName)
```

This is used to retrieve the field when the object is treated as an array.

## Parameters

- **`$fieldName`** — The name of the field.

## Return Values

Returns a SolrDocumentField object.
