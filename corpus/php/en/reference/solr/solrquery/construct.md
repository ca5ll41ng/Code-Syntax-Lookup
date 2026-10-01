---
id: "en-php-function-solrquery-construct"
language: "php"
lang: "en"
category: "function"
name: "SolrQuery::__construct"
title: "Constructor"
signature: "public SolrQuery::__construct([string $q = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrquery.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructor

## Description

```php
public SolrQuery::__construct([string $q = ...])
```

Constructor.

## Parameters

- **`$q`** — Optional search query

## Return Values

None

## Errors/Exceptions

Emits `SolrIllegalArgumentException` in case of an invalid parameter was passed.

## Changelog

|  |  |
| --- | --- |
| PECL solr 2.0.0 | If `$q` was invalid, then a `SolrIllegalArgumentException` is now thrown. Previously an error was emitted. |
