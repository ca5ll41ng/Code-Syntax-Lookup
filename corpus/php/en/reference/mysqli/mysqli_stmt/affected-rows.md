---
id: "en-php-function-mysqli-stmt-affected-rows"
language: "php"
lang: "en"
category: "function"
name: "mysqli_stmt::$affected_rows"
aliases: ["mysqli_stmt_affected_rows"]
title: "Returns the total number of rows changed, deleted, inserted, or matched by the last statement executed"
signature: "int|string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-stmt.affected-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the total number of rows changed, deleted, inserted, or matched by the last statement executed

## Description

Object-oriented style

```php
int|string $mysqli_stmt->affected_rows;
```

Procedural style

```php
int|string mysqli_stmt_affected_rows(mysqli_stmt $statement)
```

Returns the number of rows affected by the `INSERT`, `UPDATE`, or `DELETE` query. Works like `mysqli_stmt_num_rows()` for `SELECT` statements.

## Parameters

- **`$statement`** — Procedural style only: A `mysqli_stmt` object returned by `mysqli_stmt_init()`.

## Return Values

An integer greater than zero indicates the number of rows affected or retrieved. Zero indicates that no records were updated for an `UPDATE` statement, no rows matched the `WHERE` clause in the query or that no query has yet been executed. `-1` indicates that the query returned an error or that, for a `SELECT` query, `mysqli_stmt_affected_rows()` was called prior to calling `mysqli_stmt_store_result()`.

> If the number of affected rows is greater than the maximum PHP int value, the number of affected rows will be returned as a string value.

## Examples

**`mysqli_stmt_affected_rows()` example**

Object-oriented style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* create temp table */
$mysqli->query("CREATE TEMPORARY TABLE myCountry LIKE Country");

$query = "INSERT INTO myCountry SELECT * FROM Country WHERE Code LIKE ?";

/* prepare statement */
$stmt = $mysqli->prepare($query);

/* Bind variable for placeholder */
$code = 'A%';
$stmt->bind_param("s", $code);

/* execute statement */
$stmt->execute();

printf("Rows inserted: %d\n", $stmt->affected_rows);

   
```

Procedural style

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* create temp table */
mysqli_query($link, "CREATE TEMPORARY TABLE myCountry LIKE Country");

$query = "INSERT INTO myCountry SELECT * FROM Country WHERE Code LIKE ?";

/* prepare statement */
$stmt = mysqli_prepare($link, $query);

/* Bind variable for placeholder */
$code = 'A%';
mysqli_stmt_bind_param($stmt, "s", $code);

/* execute statement */
mysqli_stmt_execute($stmt);

printf("Rows inserted: %d\n", mysqli_stmt_affected_rows($stmt));

   
```

The above examples will output:

```text


Rows inserted: 17

   
```

## See Also

`mysqli_stmt_num_rows()` `mysqli_stmt_store_result()`
