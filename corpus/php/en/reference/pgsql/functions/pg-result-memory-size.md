---
id: "en-php-function-function-pg-result-memory-size"
language: "php"
lang: "en"
category: "function"
name: "pg_result_memory_size"
title: "Returns the amount of memory allocated for a query result"
signature: "int pg_result_memory_size(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-result-memory-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the amount of memory allocated for a query result

## Description

```php
int pg_result_memory_size(PgSql\Result $result)
```

Returns the amount of memory, in bytes, allocated to the specified query result `PgSql\Result` instance. This value is the same amount that would be freed by `pg_free_result()`.

## Parameters

- **`$result`** — An `PgSql\Result` instance, returned by `pg_query()`, `pg_query_params()` or `pg_execute()`(among others).

## Return Values

Returns the memory amount in bytes.

## Examples

**`pg_result_memory_size()` example**

```php


<?php
$db = pg_connect("dbname=users user=me");

$res = pg_query($db, 'SELECT 1');

$size = pg_result_memory_size($res);

var_dump($size);
?>

   
```

The above example will output something similar to:

```text


int(3288)

   
```

## See Also

 `pg_free_result()`
