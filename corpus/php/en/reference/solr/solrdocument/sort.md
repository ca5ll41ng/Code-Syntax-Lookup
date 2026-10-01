---
id: "en-php-function-solrdocument-sort"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::sort"
title: "Sorts the fields in the document"
signature: "public bool SolrDocument::sort(int $sortOrderBy, int $sortDirection = SolrDocument::SORT_ASC)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sorts the fields in the document

## Description

```php
public bool SolrDocument::sort(int $sortOrderBy, int $sortDirection = SolrDocument::SORT_ASC)
```

The fields are rearranged according to the specified criteria and sort direction Fields can be sorted by boost values, field names and number of values. The sortOrderBy parameter must be one of : * SolrDocument::SORT_FIELD_NAME * SolrDocument::SORT_FIELD_BOOST_VALUE * SolrDocument::SORT_FIELD_VALUE_COUNT The sortDirection can be one of : * SolrDocument::SORT_DEFAULT * SolrDocument::SORT_ASC * SolrDocument::SORT_DESC The default way is to sort in ascending order.

## Parameters

- **`$sortOrderBy`** — The sort criteria.
- **`$sortDirection`** — The sort direction.

## Return Values

Returns `true` on success or `false` on failure.
