---
id: "en-php-function-solrinputdocument-sort"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::sort"
title: "Sorts the fields within the document"
signature: "public bool SolrInputDocument::sort(int $sortOrderBy, int $sortDirection = SolrInputDocument::SORT_ASC)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sorts the fields within the document

## Description

```php
public bool SolrInputDocument::sort(int $sortOrderBy, int $sortDirection = SolrInputDocument::SORT_ASC)
```

The fields are rearranged according to the specified criteria and sort direction Fields can be sorted by boost values, field names and number of values. The $order_by parameter must be one of : * SolrInputDocument::SORT_FIELD_NAME * SolrInputDocument::SORT_FIELD_BOOST_VALUE * SolrInputDocument::SORT_FIELD_VALUE_COUNT The sort direction can be one of : * SolrInputDocument::SORT_DEFAULT * SolrInputDocument::SORT_ASC * SolrInputDocument::SORT_DESC

## Parameters

- **`$sortOrderBy`** — The sort criteria
- **`$sortDirection`** — The sort direction

## Return Values

Returns `true` on success or `false` on failure.
