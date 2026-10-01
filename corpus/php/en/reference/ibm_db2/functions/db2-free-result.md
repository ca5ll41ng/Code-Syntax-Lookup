---
id: "en-php-function-function-db2-free-result"
language: "php"
lang: "en"
category: "function"
name: "db2_free_result"
title: "Frees resources associated with a result set"
signature: "bool db2_free_result(resource $stmt)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees resources associated with a result set

## Description

```php
bool db2_free_result(resource $stmt)
```

Frees the system and database resources that are associated with a result set. These resources are freed implicitly when a script finishes, but you can call `db2_free_result()` to explicitly free the result set resources before the end of the script.

## Parameters

- **`$stmt`** — A valid statement resource.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `db2_free_stmt()`
