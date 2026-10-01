---
id: "en-php-function-function-cubrid-set-query-timeout"
language: "php"
lang: "en"
category: "function"
name: "cubrid_set_query_timeout"
title: "Set the timeout time of query execution"
signature: "bool cubrid_set_query_timeout(resource $req_identifier, int $timeout)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-set-query-timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the timeout time of query execution

## Description

```php
bool cubrid_set_query_timeout(resource $req_identifier, int $timeout)
```

The `cubrid_set_query_timeout()` function is used to set the timeout time of query execution.

## Parameters

- **`$req_identifier`** — Request identifier.
- **`$timeout`** — Timeout time in milliseconds.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `cubrid_get_query_timeout()`
