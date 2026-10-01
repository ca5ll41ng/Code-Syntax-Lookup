---
id: "en-php-function-function-cubrid-unbuffered-query"
language: "php"
lang: "en"
category: "function"
name: "cubrid_unbuffered_query"
title: "Perform a query without fetching the results into memory"
signature: "resource cubrid_unbuffered_query(string $query, [resource $conn_identifier = ...])"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-unbuffered-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perform a query without fetching the results into memory

## Description

```php
resource cubrid_unbuffered_query(string $query, [resource $conn_identifier = ...])
```

This function performs a query without waiting for that all query results have been complete. It will return when the results are being generated.

## Parameters

- **`$query`** — A SQL query.
- **`$conn_identifier`** — The CUBRID connection. If the connection identifier is not specified, the last connection opened by `cubrid_connect()` is assumed.

## Return Values

For SELECT, SHOW, DESCRIBE or EXPLAIN statements returns a request identifier resource on success.

For other type of SQL statements, UPDATE, DELETE, DROP, etc, returns `true` on success.

`false` on failure.

## Examples

**`cubrid_unbuffered_query()` example**

```php


<?php
    $link = cubrid_connect("localhost", 30000, "demodb", "dba", "");
    if (!$link)
    {
        die('Could not connect.');
    }
    $query = "select * from code";
    $result = cubrid_unbuffered_query($query, $link);

    while ($row = cubrid_fetch($result))
    {
        var_dump($row);
    }

    cubrid_close_request($result);
    cubrid_disconnect($link);
?>

   
```

## Notes

> The benefits of `cubrid_unbuffered_query()` come at a cost: you cannot use `cubrid_num_rows()` and `cubrid_data_seek()` on a result set returned from `cubrid_unbuffered_query()`.
