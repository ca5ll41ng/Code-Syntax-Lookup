---
id: "en-php-function-function-ibase-free-result"
language: "php"
lang: "en"
category: "function"
name: "ibase_free_result"
title: "Free a result set"
signature: "bool ibase_free_result(resource $result_identifier)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free a result set

## Description

```php
bool ibase_free_result(resource $result_identifier)
```

Frees a result set.

## Parameters

- **`$result_identifier`** — A result set created by `ibase_query()` or `ibase_execute()`.

## Return Values

Returns `true` on success or `false` on failure.
