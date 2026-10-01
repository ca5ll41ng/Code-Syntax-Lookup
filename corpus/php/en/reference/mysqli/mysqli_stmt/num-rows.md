---
id: "en-php-function-mysqli-stmt-num-rows"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::$num_rows"
aliases: ["mysqli_stmt::num_rows","mysqli_stmt_num_rows"]
title: "Returns the number of rows fetched from the server"
signature: "int|string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of rows fetched from the server

## Description

Object-oriented style

```php
int|string $mysqli_stmt->num_rows;
```

```php
public int|string mysqli_stmt::num_rows()
```

Procedural style

```php
int|string mysqli_stmt_num_rows(mysqli_stmt $statement)
```

Returns the number of rows buffered in the statement. This function will only work after `mysqli_stmt_store_result()` is called to buffer the entire result set in the statement handle.

This function returns `0` unless all rows have been fetched from the server.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

An `integer` representing the number of buffered rows. Returns `0` in unbuffered mode unless all rows have been fetched from the server.

> If the number of rows is greater than `PHP_INT_MAX`, the number will be returned as a `string`.

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

`mysqli_stmt_store_result()` `mysqli_stmt_affected_rows()` `mysqli_prepare()`
