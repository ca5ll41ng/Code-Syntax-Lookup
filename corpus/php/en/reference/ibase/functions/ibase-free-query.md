---
id: "en-php-function-function-ibase-free-query"
language: "php"
lang: "en"
category: "function"
name: "ibase_free_query"
title: "Free memory allocated by a prepared query"
signature: "bool ibase_free_query(resource $query)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-free-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free memory allocated by a prepared query

## Description

```php
bool ibase_free_query(resource $query)
```

Frees a prepared query.

## Parameters

- **`$query`** — A query prepared with `ibase_prepare()`.

## Return Values

Returns `true` on success or `false` on failure.
