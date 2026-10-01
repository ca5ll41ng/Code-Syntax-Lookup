---
id: "en-php-function-solrquery-sethighlightmaxalternatefieldlength"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::setHighlightMaxAlternateFieldLength"
title: "Sets the maximum number of characters of the field to return"
signature: "public SolrQuery SolrQuery::setHighlightMaxAlternateFieldLength(int $fieldLength, [string $field_override = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.sethighlightmaxalternatefieldlength.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the maximum number of characters of the field to return

## Description

```php
public SolrQuery SolrQuery::setHighlightMaxAlternateFieldLength(int $fieldLength, [string $field_override = ...])
```

If SolrQuery::setHighlightAlternateField() was passed the value `true`, this parameter specifies the maximum number of characters of the field to return

Any value less than or equal to 0 means unlimited.

## Parameters

- **`$fieldLength`** — The length of the field
- **`$field_override`** — The name of the field.

## Return Values

Returns the current SolrQuery object, if the return value is used.
