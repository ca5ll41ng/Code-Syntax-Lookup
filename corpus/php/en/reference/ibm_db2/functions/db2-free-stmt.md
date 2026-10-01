---
id: "en-php-function-function-db2-free-stmt"
language: "php"
lang: "en"
category: "function"
name: "db2_free_stmt"
title: "Frees resources associated with the indicated statement resource"
signature: "bool db2_free_stmt(resource $stmt)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-free-stmt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees resources associated with the indicated statement resource

## Description

```php
bool db2_free_stmt(resource $stmt)
```

Frees the system and database resources that are associated with a statement resource. These resources are freed implicitly when a script finishes, but you can call `db2_free_stmt()` to explicitly free the statement resources before the end of the script.

## Parameters

- **`$stmt`** — A valid statement resource.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `db2_free_result()`
