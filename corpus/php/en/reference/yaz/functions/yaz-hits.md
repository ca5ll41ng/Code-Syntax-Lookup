---
id: "en-php-function-function-yaz-hits"
language: "php"
lang: "en"
category: "function"
name: "yaz_hits"
title: "Returns number of hits for last search"
signature: "int yaz_hits(resource $id, [array $searchresult = ...])"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-hits.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns number of hits for last search

## Description

```php
int yaz_hits(resource $id, [array $searchresult = ...])
```

`yaz_hits()` returns the number of hits for the last search.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$searchresult`** — Result array for detailed search result information.

## Return Values

Returns the number of hits for the last search or 0 if no search was performed.

The search result array (if supplied) holds information that is returned by a Z39.50 server in the SearchResult-1 format part of a search response. The SearchResult-1 format can be used to obtain information about hit counts for various parts of the query (subquery). In particular, it is possible to obtain hit counts for the individual search terms in a query. Information for first subquery is in $array[0], second subquery in $array[1], and so forth.

| Element | Description |
| --- | --- |
| `id` | Sub query ID2 (string) |
| `count` | Result count / hits (integer) |
| `subquery.term` | Sub query term (string) |
| `interpretation.term` | Interpretated sub query term (string) |
| `recommendation.term` | Recommended sub query term (string) |

> The SearchResult facility requires PECL YAZ 1.0.5 or later and YAZ 2.1.9 or later.

> Very few Z39.50 implementations support the SearchResult facility.
