---
id: "en-php-function-solrinputdocument-addfield"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::addField"
title: "Adds a field to the document"
signature: "public bool SolrInputDocument::addField(string $fieldName, string $fieldValue, float $fieldBoostValue = 0.0)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.addfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a field to the document

## Description

```php
public bool SolrInputDocument::addField(string $fieldName, string $fieldValue, float $fieldBoostValue = 0.0)
```

For multi-value fields, if a valid boost value is specified, the specified value will be multiplied by the current boost value for this field.

## Parameters

- **`$fieldName`** — The name of the field
- **`$fieldValue`** — The value for the field.
- **`$fieldBoostValue`** — The index time boost for the field. Though this cannot be negative, you can still pass values less than 1.0 but they must be greater than zero.

## Return Values

Returns `true` on success or `false` on failure.
