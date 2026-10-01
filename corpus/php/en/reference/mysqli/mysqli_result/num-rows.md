---
id: "en-php-function-mysqli-result-num-rows"
language: "php"
lang: "en"
category: "function"
name: "mysqli_result::$num_rows"
aliases: ["mysqli_num_rows"]
title: "Gets the number of rows in the result set"
signature: "int|string()"
module: "mysqli"
source_url: "https://www.php.net/manual/en/mysqli-result.num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of rows in the result set

## Description

Object-oriented style

```php
int|string $mysqli_result->num_rows;
```

Procedural style

```php
int|string mysqli_num_rows(mysqli_result $result)
```

Returns the number of rows in the result set.

The behaviour of `mysqli_num_rows()` depends on whether buffered or unbuffered result sets are being used. This function returns `0` for unbuffered result sets unless all rows have been fetched from the server.

## Parameters

- **`$result`** — Procedural style only: A `mysqli_result` object returned by `mysqli_query()`, `mysqli_store_result()`, `mysqli_use_result()` or `mysqli_stmt_get_result()`.

## Return Values

An `integer` representing the number of fetched rows. Returns `0` in unbuffered mode unless all rows have been fetched from the server.

> If the number of rows is greater than `PHP_INT_MAX`, the number will be returned as a `string`.

## Examples

**Object-oriented style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Code, Name FROM Country ORDER BY Name");

/* Get the number of rows in the result set */
$row_cnt = $result->num_rows;

printf("Result set has %d rows.\n", $row_cnt);

   
```

**Procedural style**

```php


<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($link, "SELECT Code, Name FROM Country ORDER BY Name");

/* Get the number of rows in the result set */
$row_cnt = mysqli_num_rows($result);

printf("Result set has %d rows.\n", $row_cnt);

   
```

The above examples will output:

```text


Result set has 239 rows.

   
```

## Notes

> In contrast to the `mysqli_stmt_num_rows()` function, this function doesn't have an object-oriented method variant. In the object-oriented style, use the getter property.

## See Also

`mysqli_affected_rows()` `mysqli_store_result()` `mysqli_use_result()` `mysqli_query()` `mysqli_stmt_num_rows()`
