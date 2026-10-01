---
id: "en-php-function-mysqli-result-free"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::free"
aliases: ["mysqli_result::close","mysqli_result::free_result","mysqli_free_result"]
title: "Frees the memory associated with a result"
signature: "public void mysqli_result::free()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees the memory associated with a result

## Description

Object-oriented style

```php
public void mysqli_result::free()
```

```php
public void mysqli_result::close()
```

```php
public void mysqli_result::free_result()
```

Procedural style

```php
void mysqli_free_result(mysqli_result $result)
```

Frees the memory associated with the result.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

No value is returned.

## See Also

`mysqli_query()` `mysqli_stmt_get_result()` `mysqli_store_result()` `mysqli_use_result()`
