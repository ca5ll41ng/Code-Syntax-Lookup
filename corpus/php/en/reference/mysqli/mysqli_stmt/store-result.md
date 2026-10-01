---
id: "en-php-function-mysqli-stmt-store-result"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::store_result"
aliases: ["mysqli_stmt_store_result"]
title: "Stores a result set in an internal buffer"
signature: "public bool mysqli_stmt::store_result()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.store-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stores a result set in an internal buffer

## Description

Object-oriented style

```php
public bool mysqli_stmt::store_result()
```

Procedural style

```php
bool mysqli_stmt_store_result(mysqli_stmt $statement)
```

This function should be called for queries that successfully produce a result set (e.g. `SELECT, SHOW, DESCRIBE, EXPLAIN`) only if the complete result set needs to be buffered in PHP. Each subsequent `mysqli_stmt_fetch()` call will return buffered data.

> It is unnecessary to call `mysqli_stmt_store_result()` for other queries, but if you do, it will not harm or cause any notable performance loss in all cases. You can detect whether the query produced a result set by checking if `mysqli_stmt_result_metadata()` returns `false`.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## Examples

**Object-oriented style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name LIMIT 20";
$stmt = $mysqli->prepare($query);
$stmt->execute();

/* store the result in an internal buffer */
$stmt->store_result();

printf("Number of rows: %d.\n", $stmt->num_rows);

   
```

**Procedural style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name LIMIT 20";
$stmt = mysqli_prepare($link, $query);
mysqli_stmt_execute($stmt);

/* store the result in an internal buffer */
mysqli_stmt_store_result($stmt);

printf("Number of rows: %d.\n", mysqli_stmt_num_rows($stmt));

   
```

The above examples will output:

```text


Number of rows: 20.

   
```

## See Also

`mysqli_prepare()` `mysqli_stmt_result_metadata()` `mysqli_stmt_fetch()`
