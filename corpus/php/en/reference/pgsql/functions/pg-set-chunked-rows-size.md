---
id: "en-php-function-function-pg-set-chunked-rows-size"
language: "php"
lang: "en"
category: "function"
name: "pg_set_chunked_rows_size"
title: "Set the query results to be retrieved in chunk mode"
signature: "bool pg_set_chunked_rows_size(PgSql\\Connection $connection, int $size)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-set-chunked-rows-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the query results to be retrieved in chunk mode

## Description

```php
bool pg_set_chunked_rows_size(PgSql\Connection $connection, int $size)
```

Set the query results to be retrieved in chunk mode. The query results returned afterward will be divided into multiple chunks, each containing up to `$size` rows. This function must be called before retrieving results with `pg_get_result()`. This function is only available when libpq is version 17 or higher.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$size`** — The number of rows to be retrieved in each chunk.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If `$size` is less than `1`, a `ValueError` will be thrown.

## Examples

**`pg_result_memory_size()` example**

```php


<?php

$conn = pg_connect($conn_str);

for ($i = 0; $i < 10; $i ++) {
  pg_query($conn, "INSERT INTO users DEFAULT VALUES");
}

pg_send_query($conn, "SELECT * FROM users");
pg_set_chunked_rows_size($conn, 1);

$result = pg_get_result($conn);
var_dump(pg_num_rows($result));

// No effect after the result is retrieved
var_dump(pg_set_chunked_rows_size($conn, 10));

   
```

The above example will output:

```text


int(1)
bool(false)

   
```

## See Also

 `pg_get_result()` `pg_result_status()`
